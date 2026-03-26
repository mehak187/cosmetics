import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch, FiSliders } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import products, { categories } from "../data/products";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...result].sort((a, b) => b.price - a.price);
      case "rating":
        return [...result].sort((a, b) => b.rating - a.rating);
      case "popular":
        return [...result].sort((a, b) => b.reviews - a.reviews);
      default:
        return result;
    }
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    if (catName === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catName);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="shop-page">
      <div className="shop-header">
        <h1>Shop All Products</h1>
        <p>{filtered.length} products found</p>
      </div>

      <div className="shop-toolbar">
        <div className="search-box">
          <FiSearch size={18} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <FiSliders size={16} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
        <div className="price-filter">
          <span>Max: Rs. {priceRange[1].toLocaleString()}</span>
          <input
            type="range"
            min="0"
            max="10000"
            step="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
        </div>
      </div>

      <div className="mobile-sort">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`cat-tab ${selectedCategory === cat.name ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.name)}
            style={
              selectedCategory === cat.name
                ? { background: cat.color, borderColor: cat.color }
                : {}
            }
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span>😔</span>
          <h3>No products found</h3>
          <p>Try changing your search or filters</p>
        </div>
      )}
    </main>
  );
}
