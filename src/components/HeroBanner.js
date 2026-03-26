import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>
      <div className="hero-content">
        <span className="hero-tag">✨ New Collection 2026</span>
        <h1 className="hero-title">
          Discover Your
          <span className="gradient-text"> Perfect Glow</span>
        </h1>
        <p className="hero-desc">
          Premium beauty products at unbeatable prices. From skincare to makeup,
          find everything you need to look and feel amazing.
        </p>
        <div className="hero-btns">
          <Link to="/shop" className="btn-primary">
            Shop Now <FiArrowRight />
          </Link>
          <Link to="/categories" className="btn-secondary">
            Browse Categories
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>500+</strong>
            <span>Products</span>
          </div>
          <div className="stat">
            <strong>50K+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>Authentic</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-container">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
            alt="Beauty Products"
          />
          <div className="hero-float-card card-1">
            <span>🔥</span>
            <div>
              <strong>Trending</strong>
              <small>Vitamin C Serum</small>
            </div>
          </div>
          <div className="hero-float-card card-2">
            <span>⭐</span>
            <div>
              <strong>4.9 Rating</strong>
              <small>10K+ Reviews</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
