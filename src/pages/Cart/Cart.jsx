import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <motion.div 
              key={item.id}
              className="cart-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="quantity-btn"
                >
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  <FaPlus />
                </button>
              </div>
              
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash />
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 