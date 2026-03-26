import { Link } from "react-router-dom";
import { categories } from "../data/products";

export default function CategorySection() {
  return (
    <section className="categories-section">
      <div className="section-header">
        <span className="section-tag">Categories</span>
        <h2>Shop by Category</h2>
        <p>Find exactly what you're looking for</p>
      </div>
      <div className="category-grid">
        {categories
          .filter((c) => c.name !== "All")
          .map((cat) => (
            <Link
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              key={cat.name}
              className="category-card"
              style={{ "--cat-color": cat.color }}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <span className="category-arrow">→</span>
            </Link>
          ))}
      </div>
    </section>
  );
}
