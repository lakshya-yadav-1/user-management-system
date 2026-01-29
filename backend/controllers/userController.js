const User = require("../models/User");

// get users 
const getUsers = async (req, res) => {
  const adminId = req.admin.id;
  const page = Number(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const users = await User.find({ adminId })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalUsers = await User.countDocuments({ adminId });

    return res.json({
      users,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};

// add new user
const addUser = async (req, res) => {
  const { name, email } = req.body;
  const adminId = req.admin.id;

  try {
    const alreadyExists = await User.findOne({ email, adminId });
    if (alreadyExists) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }

    const newUser = await User.create({
      name,
      email,
      adminId,
    });

    return res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to add user",
    });
  }
};

// update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const adminId = req.admin.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id, adminId },
      { name, email },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to update user",
    });
  }
};

// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const adminId = req.admin.id;

  try {
    const deletedUser = await User.findOneAndDelete({
      _id: id,
      adminId,
    });

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json({
      message: "User deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to delete user",
    });
  }
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
