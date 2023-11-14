const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        image:{
            data:Buffer,
            contentType: String,
            required: [true, "Must choose at least one image file"]
        },
        year:{
            ref:"Trips"
        }
    }
)

const Images = mongoose.model("Image", ImageSchema)

module.exports = Images