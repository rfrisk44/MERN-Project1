const mongoose = require("mongoose");

const TripsSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: [true, "What year did this occur?"],
      min: [1900, "Date too old"],
      max: [2023, "Date is in the future!"]
    },
    images: [{
        ref: "Image"
    }]
  },
  { timestamps: true }
);

const Trips = mongoose.model("Trips", TripsSchema);

module.exports = Trips;