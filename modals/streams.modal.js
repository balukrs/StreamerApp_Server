const mongoose = require("mongoose");
const { Schema } = mongoose;

const streamsschema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userid: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Streams = mongoose.model("Streams", streamsschema);
module.exports = Streams;
