import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSort, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Products.css';

const mockProducts = [
  {
    id: 1,
    name: "Sony WH-1000XM4 Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    rating: 4.8,
    isFeatured: true
  },
  {
    id: 2,
    name: "Apple Watch Series 7",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    category: "Electronics",
    rating: 4.7
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Fashion",
    rating: 4.5
  },
  {
    id: 4,
    name: "MacBook Pro M1",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    category: "Electronics",
    rating: 4.9
  },
  {
    id: 5,
    name: "Canon EOS R5",
    price: 3899.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    category: "Electronics",
    rating: 4.8
  },
  {
    id: 6,
    name: "Leather Weekend Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Fashion",
    rating: 4.6
  }
];

const Products = () => {
  const [products] = useState(mockProducts);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="products-page">
      <motion.div 
        className="products-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Discover Our Products</h1>
        <p className="subtitle">Explore our curated collection of premium products</p>
        
        <div className="products-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for products..." />
          </div>
          <button 
            className="filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>
          <button className="sort-button">
            <FaSort /> Sort
          </button>
        </div>
      </motion.div>

      <div className="products-layout">
        {showFilters && (
          <motion.aside 
            className="filters-sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Filters</h3>
            <div className="filter-section">
              <h4>Categories</h4>
              <label>
                <input type="checkbox" /> Electronics
              </label>
              <label>
                <input type="checkbox" /> Fashion
              </label>
              <label>
                <input type="checkbox" /> Home & Living
              </label>
            </div>

            <div className="filter-section">
              <h4>Price Range</h4>
              <input type="range" min="0" max="1000" className="price-range" />
              <div className="price-inputs">
                <input type="number" placeholder="Min" />
                <input type="number" placeholder="Max" />
              </div>
            </div>

            <div className="filter-section">
              <h4>Rating</h4>
              <label>
                <input type="checkbox" /> 4★ & above
              </label>
              <label>
                <input type="checkbox" /> 3★ & above
              </label>
            </div>
          </motion.aside>
        )}

        <motion.div 
          className="products-grid"
          layout
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="product-image">
                <img src={`${product.image}?auto=format&fit=crop&w=500&q=80`} alt={product.name} />
                <div className="product-actions">
                  <button className="action-btn wishlist">
                    <FaHeart />
                  </button>
                  <button className="action-btn cart">
                    <FaShoppingCart />
                  </button>
                </div>
                {product.isFeatured && <span className="featured-badge">Featured</span>}
              </div>
              <div className="product-info">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-meta">
                  <span className="price">${product.price}</span>
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                    <span className="rating-number">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products; 