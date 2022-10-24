const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearFounded: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "college",
  }
);

const contestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collation: "contests" }
);

const clubSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearFounded: {
      type: Number,
      required: true,
    },
    numberOfMembers: {
      type: Number,
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

const studentSchema = new Schema(
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
      type: Number,
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

const College = mongoose.model("College", collegeSchema);
const User = mongoose.model("User", studentSchema);
const Club = mongoose.model("Club", clubSchema);
const Contest = mongoose.model("Contest", contestSchema);

module.exports = { College, User, Club, Contest };
