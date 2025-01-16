import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import './Categories.css';

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/electronics.jpg",
    itemCount: 120,
  },
  {
    id: 2,
    name: "Fashion",
    image: "/fashion.jpg",
    itemCount: 350,
  },
  {
    id: 3,
    name: "Home & Living",
    image: "/home.jpg",
    itemCount: 200,
  },
  {
    id: 4,
    name: "Sports",
    image: "/sports.jpg",
    itemCount: 150,
  },
  {
    id: 5,
    name: "Books",
    image: "/books.jpg",
    itemCount: 450,
  },
  {
    id: 6,
    name: "Beauty",
    image: "/beauty.jpg",
    itemCount: 180,
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Shop by Category</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <motion.div 
        className="categories-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredCategories.map((category) => (
          <motion.div
            key={category.id}
            className="category-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.itemCount} items</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories; 