import { motion } from 'framer-motion';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/product1.jpg",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/product2.jpg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Designer Bag",
    price: 299.99,
    image: "/product3.jpg",
    category: "Fashion"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    image: "/product4.jpg",
    category: "Sports"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts; 