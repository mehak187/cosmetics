import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    clearCart,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    const message = cartItems
      .map(
        (item) =>
          `• ${item.name} x${item.qty} = Rs. ${(item.price * item.qty).toLocaleString()}`
      )
      .join("\n");
    const total = `\n\n💰 Total: Rs. ${totalPrice.toLocaleString()}`;
    const text = `🛍️ *New Order - GlowUp Beauty Store*\n\n${message}${total}\n\nPlease confirm my order! 🙏`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? "active" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h2>
            <FiShoppingBag /> Your Cart
          </h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>Your cart is empty</p>
            <small>Add some beautiful products!</small>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>
                        <FiMinus size={14} />
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">
                  Rs. {totalPrice.toLocaleString()}
                </span>
              </div>
              <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
                📱 Order via WhatsApp
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
