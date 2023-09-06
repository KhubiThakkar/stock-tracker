const express = require("express");
const router = express.Router();
const {
  getTicker
} = require("../controllers/getThread")

router.get("/ticker", getTicker);

module.exports = router
