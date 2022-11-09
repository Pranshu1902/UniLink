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
    website: {
      type: String,
      required: false,
    },
    domain: {
      type: String,
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
    // club ID for the event
    clubId: { type: String, required: true },
    // college ID for contest
    collegeId: {
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
    collegeId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "clubs",
  }
);

const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "experience",
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
      type: String,
      required: true,
    },
    description: {
      // short description for user's tagline
      type: String,
      required: true,
    },
    about: { type: String, required: false },
    // social media
    mobile: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// interest of students
const studentInterestSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// model to get clubs a student is part of
const clubOfStudentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    clubId: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "clubOfStudent",
  }
);

// model for posts by club
const clubPostSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    clubId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "clubPost",
  }
);

// model for posts by students
const studentPostSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "userPost",
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
const experience = mongoose.model("Experience", experienceSchema);
const clubPost = mongoose.model("ClubPost", clubPostSchema);
const studentPost = mongoose.model("StudentPost", studentPostSchema);
const clubOfStudent = mongoose.model("ClubOfStudent", clubOfStudentSchema);
const studentInterest = mongoose.model(
  "StudentInterest",
  studentInterestSchema
);

module.exports = {
  College,
  User,
  Club,
  Contest,
  Internship,
  Fellowship,
  Chat,
  Blog,
  experience,
  clubPost,
  studentPost,
  clubOfStudent,
  studentInterest,
};
