const express = require("express");
const router = express.Router();
const { getCharacters } = require("../controllers/character.controller");

// get all games
router.get("/", async (req, res) => {
  try {
    const characters = await getCharacters();
    res.render("index", { character });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
