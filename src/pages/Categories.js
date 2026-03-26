import { Link } from "react-router-dom";
import products, { categories } from "../data/products";

export default function Categories() {
  return (
    <main className="categories-page">
      <div className="page-header">
        <h1>All Categories</h1>
        <p>Browse our complete collection by category</p>
      </div>
      <div className="categories-full-grid">
        {categories
          .filter((c) => c.name !== "All")
          .map((cat) => {
            const catProducts = products.filter(
              (p) => p.category === cat.name
            );
            return (
              <Link
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                key={cat.name}
                className="category-full-card"
                style={{ "--cat-color": cat.color }}
              >
                <div className="cat-full-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{catProducts.length} Products</p>
                <div className="cat-preview">
                  {catProducts.slice(0, 3).map((p) => (
                    <img key={p.id} src={p.image} alt={p.name} />
                  ))}
                </div>
                <span className="explore-btn">Explore →</span>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
