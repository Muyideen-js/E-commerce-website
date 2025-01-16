import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBox, FaHeart, FaMapMarkerAlt, FaCreditCard, FaEdit } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const mockOrders = [
  {
    id: "ORD001",
    date: "2024-03-15",
    status: "Delivered",
    total: 299.99,
    items: [
      { name: "Wireless Headphones", quantity: 1, price: 199.99 },
      { name: "Phone Case", quantity: 2, price: 49.99 }
    ]
  },
  {
    id: "ORD002",
    date: "2024-03-10",
    status: "Processing",
    total: 159.99,
    items: [
      { name: "Smart Watch", quantity: 1, price: 159.99 }
    ]
  }
];

const Profile = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '123-456-7890',
    address: '123 Main St, City, Country'
  });

  const handleSaveProfile = () => {
    // Here you would typically make an API call to update the user's information
    setIsEditing(false);
  };

  const renderProfile = () => (
    <div className="profile-info">
      <div className="profile-header">
        <h3>Personal Information</h3>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FaEdit /> {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <motion.form 
          className="edit-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={userInfo.address}
              onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
            />
          </div>
          <button 
            type="button" 
            className="save-button"
            onClick={handleSaveProfile}
          >
            Save Changes
          </button>
        </motion.form>
      ) : (
        <div className="info-display">
          <div className="info-item">
            <span className="label">Name:</span>
            <span>{userInfo.name}</span>
          </div>
          <div className="info-item">
            <span className="label">Email:</span>
            <span>{userInfo.email}</span>
          </div>
          <div className="info-item">
            <span className="label">Phone:</span>
            <span>{userInfo.phone}</span>
          </div>
          <div className="info-item">
            <span className="label">Address:</span>
            <span>{userInfo.address}</span>
          </div>
        </div>
      )}
    </div>
  );

  const renderOrders = () => (
    <div className="orders-section">
      <h3>Order History</h3>
      <div className="orders-list">
        {mockOrders.map((order) => (
          <motion.div 
            key={order.id}
            className="order-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="order-header">
              <div>
                <h4>Order #{order.id}</h4>
                <span className="order-date">{order.date}</span>
              </div>
              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>Total:</span>
              <span>${order.total}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="user-brief">
            <div className="user-avatar">
              <FaUser />
            </div>
            <h2>{userInfo.name}</h2>
          </div>
          <nav className="profile-nav">
            <button
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser /> Profile
            </button>
            <button
              className={activeTab === 'orders' ? 'active' : ''}
              onClick={() => setActiveTab('orders')}
            >
              <FaBox /> Orders
            </button>
            <button
              className={activeTab === 'wishlist' ? 'active' : ''}
              onClick={() => setActiveTab('wishlist')}
            >
              <FaHeart /> Wishlist
            </button>
            <button
              className={activeTab === 'addresses' ? 'active' : ''}
              onClick={() => setActiveTab('addresses')}
            >
              <FaMapMarkerAlt /> Addresses
            </button>
            <button
              className={activeTab === 'payment' ? 'active' : ''}
              onClick={() => setActiveTab('payment')}
            >
              <FaCreditCard /> Payment Methods
            </button>
          </nav>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
        
        <div className="profile-content">
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'orders' && renderOrders()}
          {/* Add other tab contents as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile; 