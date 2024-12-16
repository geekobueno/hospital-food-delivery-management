const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/authMiddleware');
const { 
  addPackage, 
  updatePackage, 
  deletePackage 
} = require('../controllers/adminController');
const { getAllBookings } = require('../controllers/bookingController');

// Apply admin authentication to all admin routes
router.use(adminAuth)

// Package management routes
router.post('/packages', addPackage);
router.put('/packages/:id', updatePackage);
router.delete('/packages/:id', deletePackage);

// Bookings management route
router.get('/bookings', getAllBookings);

module.exports = router;