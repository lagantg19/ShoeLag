const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

const {
  getshoeInventory,
  getExplore,
  createshoeInventory,
  deleteshoeInventory,
  updateshoeInventory,
} = require("../controllers/shoeinventoryController");

router.use(requireAuth);

router.get("/", getshoeInventory);

router.get("/explore", getExplore);

router.post("/", createshoeInventory);

router.delete("/:id", deleteshoeInventory);

router.patch("/:id", updateshoeInventory);
module.exports=router