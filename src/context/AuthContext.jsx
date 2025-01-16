import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // This would be replaced with actual API call
      if (email === "test@example.com" && password === "password") {
        const userData = {
          id: 1,
          email,
          name: "Test User"
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password, name) => {
    setLoading(true);
    setError(null);
    try {
      // This would be replaced with actual API call
      const userData = {
        id: Date.now(),
        email,
        name
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 