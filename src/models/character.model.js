const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    originalNation: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      unique: true,
    },

    userInstruments: [
      {
        type: String,
        trim: true,
      },
    ],

    userInstrumentsRequest: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const character = mongoose.model("character", CharacterSchema);

module.exports = character;
