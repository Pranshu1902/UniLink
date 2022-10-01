const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let clubSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearFounded: {
      type: Int8Array,
      required: true,
    },
    numberOfMembers: {
      type: Int16Array,
      required: true,
    },
    post: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    collection: "clubs",
  }
);

let studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    organizationId: {
      // college ID
      type: Int16Array,
      required: true,
    },
    description: {
      // short description for user's tagline
      type: String,
      required: true,
    },
    about: { type: String, required: false },
    interests: [
      // fields of interests
      {
        type: String,
        required: false,
      },
    ],
    post: {
      type: String,
      required: false,
    },
    clubs: [{ type: String, required: false }], // clubs students are part of
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const User = mongoose.model("User", studentSchema);
const Club = mongoose.model("Club", clubSchema);

module.exports = { User, Club };
