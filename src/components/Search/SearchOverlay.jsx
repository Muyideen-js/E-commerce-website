import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Mock search results - replace with actual API call
  useEffect(() => {
    if (searchTerm.length > 2) {
      // Simulate API call
      const mockResults = [
        { id: 1, name: "Wireless Headphones", category: "Electronics", price: 199.99 },
        { id: 2, name: "Smart Watch", category: "Electronics", price: 299.99 },
        { id: 3, name: "Running Shoes", category: "Sports", price: 89.99 },
      ].filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="search-container">
            <div className="search-header">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <button className="close-btn" onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            <div className="search-results">
              {results.map((result) => (
                <motion.div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(result.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h4>{result.name}</h4>
                  <div className="result-meta">
                    <span className="category">{result.category}</span>
                    <span className="price">${result.price}</span>
                  </div>
                </motion.div>
              ))}
              {searchTerm.length > 2 && results.length === 0 && (
                <div className="no-results">
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay; 