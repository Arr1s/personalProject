const character = require("../models/character.model");

const getCharacters = async (req, res) => {
  try {
    const character = await character.find({});
    return character;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getCharacters,
};
