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
    type: {
      type: String, // like hackathon, racing, etc.
      required: false,
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

const internshipSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "internship",
  }
);

const fellowshipSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "fellowship",
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

const chatSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    fromId: {
      type: Number,
      required: true,
    },
    toId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "chats",
  }
);

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "blogs",
  }
);

const College = mongoose.model("College", collegeSchema);
const User = mongoose.model("User", studentSchema);
const Club = mongoose.model("Club", clubSchema);
const Contest = mongoose.model("Contest", contestSchema);
const Internship = mongoose.model("Internship", internshipSchema);
const Fellowship = mongoose.model("Fellowship", fellowshipSchema);
const Chat = mongoose.model("Chats", chatSchema);
const Blog = mongoose.model("Blogs", blogSchema);

module.exports = {
  College,
  User,
  Club,
  Contest,
  Internship,
  Fellowship,
  Chat,
  Blog,
};
