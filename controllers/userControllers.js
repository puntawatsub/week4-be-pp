const {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
} = require("../models/userModel");

// {
//   "name": "Matti Seppänen",
//   "email": "matti@example.com",
//   "password": "M@45mtg$",
//   "phone_number": "+358401234567",
//   "gender": "Male",
//   "date_of_birth": "2000-01-15",
//   "membership_status": "Active",
//   "account_verified": true,
//   "country": "Finland"
// }

const createUser = (req, res) => {
  const user = addOne(req.body);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(500).json({ messsage: "Fail to create user" });
  }
};

const getAllUsers = (req, res) => {
  res.json(getAll());
};

const getUserById = (req, res) => {
  const id = req.params.userId;
  const user = findById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const updateUser = (req, res) => {
  const userBody = req.body;
  const id = req.params.userId;
  const user = updateOneById(id, userBody);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUser = (req, res) => {
  const id = req.params.userId;
  if (deleteOneById(id)) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
