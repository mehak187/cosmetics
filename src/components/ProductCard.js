import { FiShoppingBag, FiStar, FiHeart } from "react-icons/fi";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23f8f0f5'%3E%3Crect width='400' height='300'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23ff6b9d'%3E%F0%9F%92%84%3C/text%3E%3Ctext x='50%25' y='62%25' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23ccc'%3EProduct Image%3C/text%3E%3C/svg%3E";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img
          src={imgError ? PLACEHOLDER : product.image}
          alt={product.name}
          className="product-image"
          onError={() => setImgError(true)}
        />
        {product.badge && (
          <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="discount-badge">-{discount}%</span>
        )}
        <button
          className={`wishlist-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <FiHeart size={18} fill={liked ? "#ff6b9d" : "none"} />
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-rating">
          <FiStar size={14} fill="#f59e0b" stroke="#f59e0b" />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-price-row">
          <div className="price-group">
            <span className="product-price">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="original-price">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            <FiShoppingBag size={16} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
