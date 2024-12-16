const Booking = require('../models/booking');
const Package = require('../models/package');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { 
      packageId, 
      customerName, 
      email, 
      phoneNumber, 
      numberOfTravelers, 
      specialRequests 
    } = req.body;

    // Validate package exists
    const package = await Package.findById(packageId);
    if (!package) {
      return res.status(404).json({ message: 'Package not found' });
    }

    // Calculate total price
    const totalPrice = package.price * numberOfTravelers;

    // Create booking
    const newBooking = new Booking({
      package: packageId,
      customerName,
      email,
      phoneNumber,
      numberOfTravelers,
      specialRequests,
      totalPrice
    });

    await newBooking.save();

    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating booking', 
      error: error.message 
    });
  }
};

// Get bookings (for admin)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('package');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching bookings', 
      error: error.message 
    });
  }
};