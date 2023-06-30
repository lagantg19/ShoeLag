const mongoose = require("mongoose");
const Inventory = require("../models/shoeinventoryModel");

const getshoeInventory = async (req, res) => {
  const user_id = req.user._id;
  const inventory = await Inventory.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(inventory);
};

const getExplore = async (req, res) => {
  const inventory = await Inventory.find({}).sort({ createdAt: -1 });
  res.status(200).json(inventory);
};

const createshoeInventory = async (req, res) => {
  const { name, price, image, gender,like} = req.body;

  try {
    const buyer = "";
    const user_id = req.user._id;
    const inventory = await Inventory.create({
      name,
      price,
      buy: false,
      buyer,
      user_id,
      image,
      gender,
      like,
      save:false,
      approved:false
    });
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteshoeInventory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no suchh inventory" });
  }
  const inventory = await Inventory.findByIdAndDelete({ _id: id });

  if (!inventory) {
    return res.status(400).json({ error: "no such inventory" });
  }
  res.status(200).json(inventory);
};

const updateshoeInventory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no suchh inventory" });
  }
  const inventory = await Inventory.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!inventory) {
    return res.status(400).json({ error: "no such inventory" });
  }
  res.status(200).json(inventory);
};

module.exports = {
  getshoeInventory,
  getExplore,
  createshoeInventory,
  deleteshoeInventory,
  updateshoeInventory,
};
