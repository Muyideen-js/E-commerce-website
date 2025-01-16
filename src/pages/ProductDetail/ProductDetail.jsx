import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import './ProductDetail.css';

// This would typically come from an API
const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 199.99,
  description: "Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
  images: ["/product1.jpg", "/product1-2.jpg", "/product1-3.jpg"],
  category: "Electronics",
  rating: 4.5,
  reviews: 128,
  specs: [
    "Active Noise Cancellation",
    "30-hour Battery Life",
    "Bluetooth 5.0",
    "Quick Charging",
    "Built-in Microphone"
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="product-detail">
      <div className="product-images">
        <motion.img 
          src={product.images[selectedImage]}
          alt={product.name}
          className="main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className={selectedImage === index ? 'active' : ''}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        
        <div className="product-meta">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index}
                className={index < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
              />
            ))}
            <span>({product.reviews} reviews)</span>
          </div>
          <span className="category">{product.category}</span>
        </div>

        <div className="price">${product.price}</div>
        
        <p className="description">{product.description}</p>
        
        <div className="specifications">
          <h3>Key Features</h3>
          <ul>
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail; 