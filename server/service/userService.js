const user = require("../models/user");

const userService = {
  create: async (req, res) => {
    const userCreated = await user.create(req.body);
    res.status(200).json(userCreated);
  },
  getAll: async (req, res) => {
    const users = await user.find();
    res.status(200).json(users);
  },
  getById: async (req, res) => {
    const id = req.params.id;
    const users = await user.findById(id);
    res.status(200).json(users);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const userUpdated = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(userUpdated);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const userdeleted = await user.findByIdAndDelete(id);
    res.status(200).json(userdeleted);
  },
  getByRole: async (req, res) => {
    const role = req.params.role;
    const users = await user.find({ role: role });
    res.status(200).json(users);
  },
  getByCity: async (req, res) => {
    const city = req.params.city;
    const users = await user.find({ city: city });
    res.status(200).json(users);
  },
  getByCountry: async (req, res) => {
    const country = req.params.country;
    const users = await user.find({ country: country });
    res.status(200).json(users);
  },
};

module.exports = userService;
