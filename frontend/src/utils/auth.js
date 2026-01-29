// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const admin = localStorage.getItem('admin');
  return !!(token && admin);
};

// Get stored admin data
export const getAdmin = () => {
  const admin = localStorage.getItem('admin');
  return admin ? JSON.parse(admin) : null;
};

// Get stored token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Clear auth data
export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateLoginForm = (email, password) => {
  const errors = {};
  
  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!password) {
    errors.password = 'Password is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegisterForm = (name, email, password) => {
  const errors = {};
  
  if (!name || name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  
  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!password || password.length < 4) {
    errors.password = 'Password must be at least 4 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateUserForm = (name, email) => {
  const errors = {};
  
  if (!name || name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  
  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email format';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};