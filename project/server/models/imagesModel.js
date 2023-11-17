const mongoose = require("mongoose");
const Schema = mongoose.Schema

const imagesSchema = new Schema(
  {
    filename: {
        data: Buffer,
        contentType: String,
        required: [true, "Upload one image"]
    },
    trips_id: {
        type: Schema.Types.ObjectId,
        ref: "Trips"
    },
    path: {
        type:String,
    }
  },
  { timestamps: true }
);

const images = mongoose.model("images", imagesSchema);

module.exports = images;