import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Discover Amazing Products</h1>
          <p>Find the best deals on trending items</p>
          <button className="cta-button">Shop Now</button>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/hero-image.png" alt="Shopping" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 