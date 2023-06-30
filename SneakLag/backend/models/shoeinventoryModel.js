const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoeinventorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    buy: {
      type: Boolean,
      required: true,
    },
    buyer: {
      type: String,
      required: false,
    },
    user_id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      required: true,
    },
    save: {
      type: Boolean,
      required: true,
    },
    approved: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShoeInventory", shoeinventorySchema);
