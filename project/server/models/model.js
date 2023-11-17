const mongoose = require("mongoose");
const Schema = mongoose.Schema

const TripsSchema = new Schema(
  {
    year: {
      type: Number,
      required: [true, "What year did this occur?"],
      min: [1900, "Date too old"],
      max: [2023, "Date is in the future!"]
    },
    images: [{
        type: Schema.Types.ObjectId,
        ref:"images"
    }]
  },
  { timestamps: true }
);

const Trips = mongoose.model("Trips", TripsSchema);

module.exports = Trips;