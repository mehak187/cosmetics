import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller");
  const newArrivals = products.filter((p) => p.badge === "New");

  return (
    <main>
      <HeroBanner />

      <section className="products-section">
        <div className="section-header">
          <span className="section-tag">🔥 Most Popular</span>
          <h2>Bestsellers</h2>
          <p>Our customers' favorites</p>
        </div>
        <div className="product-grid">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <CategorySection />

      <section className="products-section">
        <div className="section-header">
          <span className="section-tag">🆕 Just Arrived</span>
          <h2>New Arrivals</h2>
          <p>Fresh products just for you</p>
        </div>
        <div className="product-grid">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="promo-banner">
        <div className="promo-content">
          <h2>Get 20% Off Your First Order!</h2>
          <p>Use code <strong>GLOW20</strong> at checkout</p>
          <span className="promo-code">GLOW20</span>
        </div>
      </section>
    </main>
  );
}
