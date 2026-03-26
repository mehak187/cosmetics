import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Deals() {
  const deals = products
    .map((p) => ({
      ...p,
      discount: Math.round(
        ((p.originalPrice - p.price) / p.originalPrice) * 100
      ),
    }))
    .sort((a, b) => b.discount - a.discount);

  return (
    <main className="deals-page">
      <div className="deals-banner">
        <h1>🔥 Hot Deals & Offers</h1>
        <p>Grab the best discounts before they're gone!</p>
      </div>
      <div className="product-grid">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
