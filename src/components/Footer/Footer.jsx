import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopHub</h3>
          <p>Your one-stop destination for amazing products at incredible prices.</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <Link to="/category/electronics">Electronics</Link>
          <Link to="/category/fashion">Fashion</Link>
          <Link to="/category/home">Home & Living</Link>
          <Link to="/category/sports">Sports</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@shophub.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Shopping Street, NY</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 