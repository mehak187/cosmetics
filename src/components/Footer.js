import { FiInstagram, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>💎 GlowUp</h3>
          <p>Your trusted destination for premium beauty products at the best prices.</p>
          <div className="social-links">
            <a href="#!" aria-label="Instagram"><FiInstagram size={20} /></a>
            <a href="#!" aria-label="Phone"><FiPhone size={20} /></a>
            <a href="#!" aria-label="Email"><FiMail size={20} /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/shop">Shop All</a>
          <a href="/categories">Categories</a>
          <a href="/deals">Deals</a>
        </div>
        <div className="footer-links">
          <h4>Customer Care</h4>
          <a href="#!">Shipping Policy</a>
          <a href="#!">Return Policy</a>
          <a href="#!">FAQ</a>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FiMapPin size={14} /> Lahore, Pakistan</p>
          <p><FiPhone size={14} /> +92 300 1234567</p>
          <p><FiMail size={14} /> info@glowup.pk</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 GlowUp Beauty Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
