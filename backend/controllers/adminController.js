const Package = require('../models/package');

// Add a new package
exports.addPackage = async (req, res) => {
  try {
    const { title, description, price, availableDates, image, maxTravelers } = req.body;

    const newPackage = new Package({
      title,
      description,
      price,
      availableDates,
      image,
      maxTravelers
    });

    await newPackage.save();

    res.status(201).json({
      message: 'Package created successfully',
      package: newPackage
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating package', 
      error: error.message 
    });
  }
};

// Update an existing package
exports.updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedPackage = await Package.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.status(200).json({
      message: 'Package updated successfully',
      package: updatedPackage
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error updating package', 
      error: error.message 
    });
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPackage = await Package.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.status(200).json({ 
      message: 'Package deleted successfully',
      package: deletedPackage 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting package', 
      error: error.message 
    });
  }
};