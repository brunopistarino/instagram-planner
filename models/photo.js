import { Schema, model, models } from "mongoose";

const photoSchema = new Schema({
  url: String,
  description: {
    type: String,
    // required: true,
    // unique: true,
  },
});

const Photo = models.Photo || model("Photo", photoSchema);

export default Photo;
