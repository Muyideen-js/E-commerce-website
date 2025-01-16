import { motion } from 'framer-motion';
import { FaArrowRight, FaShippingFast, FaLock, FaHeadset } from 'react-icons/fa';
import FeaturedProducts from '../../components/Products/FeaturedProducts';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover premium fashion that defines your unique personality
          </motion.p>
          <motion.button
            className="shop-now"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection <span>→</span>
          </motion.button>
        </div>

        <motion.div 
          className="hero-image-grid"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="main-image">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80" 
              alt="Fashion Model"
              className="primary-image"
            />
          </div>
          <div className="secondary-images">
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" 
              alt="Premium Watch"
              className="secondary-image"
            />
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" 
              alt="Red Sneakers"
              className="secondary-image"
            />
          </div>
          <div className="floating-card">
            <span className="discount">50% OFF</span>
            <h3>Flash Sale</h3>
            <p>Limited Time Offer</p>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Top Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div 
              className="category-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.items} Items</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Trending Section */}
      <section className="trending-section">
        <div className="section-header">
          <h2>Trending Now</h2>
          <p>Most popular picks this week</p>
        </div>
        <div className="trending-grid">
          {trendingItems.map((item, index) => (
            <motion.div
              className="trending-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="trending-image">
                <img src={item.image} alt={item.name} />
                <span className="trending-badge">{item.badge}</span>
                <div className="quick-actions">
                  <button aria-label="Add to wishlist">♥</button>
                  <button aria-label="Quick view">👁</button>
                </div>
              </div>
              <div className="trending-info">
                <h3>{item.name}</h3>
                <div className="rating">
                  <span className="stars">{'★'.repeat(Math.floor(item.rating))}</span>
                  <span className="review-count">({item.reviews})</span>
                </div>
                <div className="price-row">
                  <p className="price">${item.price}</p>
                  <button className="add-to-cart">+</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Exclusive Deals Section */}
      <section className="exclusive-deals">
        <div className="deals-header">
          <h2>Exclusive Deals</h2>
          <p>Limited time offers on premium products</p>
        </div>
        <div className="deals-grid">
          <motion.div className="deal-card large">
            <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80" alt="Premium Sneakers" />
            <div className="deal-content">
              <span className="deal-tag">HOT DEAL</span>
              <h3>Premium Sneakers</h3>
              <p className="deal-price">
                <span className="original">$200</span>
                <span className="discounted">$149</span>
              </p>
            </div>
          </motion.div>
          <motion.div className="deal-card">
            <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80" alt="Watch" />
            <div className="deal-content">
              <span className="deal-tag">NEW</span>
              <h3>Luxury Watch</h3>
              <p className="deal-price">From $299</p>
            </div>
          </motion.div>
          <motion.div className="deal-card">
            <img src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80" alt="Sunglasses" />
            <div className="deal-content">
              <span className="deal-tag">TRENDING</span>
              <h3>Designer Sunglasses</h3>
              <p className="deal-price">From $99</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Subscribe for exclusive offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Join</button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Dummy data
const categories = [
  {
    name: "Luxury Watches",
    items: 120,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Designer Shoes",
    items: 150,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Premium Bags",
    items: 90,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Accessories",
    items: 200,
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=600&q=80"
  }
];

const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free worldwide shipping on all orders over $100"
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Express delivery within 3-5 business days"
  },
  {
    icon: "🛡️",
    title: "Secure Payment",
    description: "Multiple secure payment methods available"
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description: "Guaranteed authentic and premium products"
  }
];

// Add to existing dummy data
const trendingItems = [
  {
    name: "Ray-Ban Aviator",
    price: "199.99",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 128
  },
  {
    name: "Leather Weekend Bag",
    price: "299.99",
    badge: "New",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 84
  },
  {
    name: "Premium Watch",
    price: "499.99",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 156
  },
  {
    name: "Classic Heels",
    price: "159.99",
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviews: 92
  }
];

export default Home; 