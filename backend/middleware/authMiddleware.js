const adminAuth = (req, res, next) => {
    const { username, password } = req.headers;
  
    // Hardcoded admin credentials (for demonstration)
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'adminpassword';
  
    // Basic authentication check
    if (
      username !== ADMIN_USERNAME || 
      password !== ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    next();
  };
  
  module.exports = adminAuth;