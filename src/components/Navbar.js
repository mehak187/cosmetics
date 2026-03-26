import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/categories", label: "Categories" },
    { to: "/deals", label: "Deals" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">💎</span>
          <span className="logo-text">GlowUp</span>
          <span className="logo-sub">Beauty Store</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/shop" className="nav-icon-btn">
            <FiSearch size={20} />
          </Link>
          <button
            className="nav-icon-btn cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <FiShoppingBag size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
          <button
            className="nav-icon-btn menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
