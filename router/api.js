const express = require("express");
const { response } = require("../app");
const router = express.Router();
const {
  College,
  User,
  Club,
  Contest,
  Internship,
  Fellowship,
  Blog,
  experience,
  clubPost,
  studentPost,
  clubOfStudent,
  studentInterest,
} = require("../models/models");

// get students of a specific college
router.get("/college/:id/users", (request, response) => {
  User.find(
    { where: { organizationId: request.params.id } },
    (err, colleges) => {
      response.send(colleges);
    }
  );
});

//
// College APIs
//

// get all colleges
router.get("/college/", (request, response) => {
  College.find({}, (err, colleges) => {
    response.send(colleges);
  });
});

// create a college
router.post("/college/", (request, response) => {
  College.create(request.query, (err, college) => {
    if (!err) {
      response.send(college);
    } else {
      console.log("Failed");
    }
  });
});

// delete a college
router.delete("/college/:id/", (request, response) => {
  College.deleteOne({ id: request.params.id }, (err, res) => {
    if (err) {
      console.log(err);
    }
    response.send(res);
  });
});

// update a college
router.put("/college/:id/", (request, response) => {
  College.updateOne(
    { id: request.params.id },
    { $set: request.query },
    (err, res) => {
      if (err) {
        console.log(err);
      }
      response.send(res);
    }
  );
});

//
// club APIs
//
// get all clubs
router.get("/clubs/", (request, response) => {
  Club.find({}, (err, clubs) => {
    response.send(clubs);
  });
});

// get club by id
router.get("/clubs/:id/", (request, response) => {
  Club.findById(request.params.id, (err, clubs) => {
    console.log(err);
    response.send(clubs);
  });
});

// create new club
router.post("/clubs/", (request, response) => {
  console.log("creating club...");
  console.log(request);
  Club.create(request.query, (err, club) => {
    if (!err) {
      response.send(club);
    } else {
      console.log("Failed");
    }
  });
  console.log("club created!");
});

// update club details
router.post("/clubs/:id/update/", (request, response) => {
  Club.updateOne(
    { id: request.params.id },
    { $set: request.query },
    (err, res) => {
      if (err) {
        console.log(err);
      }
      response.send(res);
    }
  );
});

// delete club
router.delete("/clubs/:id/", (request, response) => {
  Club.deleteOne({ id: request.params.id }, (err, res) => {
    if (err) {
      console.log(err);
    }
    response.send(res);
  });
});

//
// USER APIs
//
// get all users
router.get("/user/", (request, response) => {
  User.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create user
router.post("/user/", async (request, response) => {
  console.log(request.query);
  const email = JSON.stringify(request.query.email);
  const domain = email.substring(email.lastIndexOf("@") + 1);
  console.log(domain);

  try {
    const college = await College.findOne({ where: { domain: domain } });
    request.query.organizationId = college.id;
    const res = await User.create(request.query);
    response.send(res);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

// get specific user
router.get("/user/:id/", (request, response) => {
  User.findOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// login user
router.post("/user/login/", (request, response) => {
  try {
    User.findOne({
      where: { email: request.query.email, password: request.query.password },
    });
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

// update specific user
router.put("/user/:id/", (request, response) => {
  User.replaceOne({ id: request.params.id }, request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// delete specific user
router.delete("/user/:id/", (request, response) => {
  User.deleteOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

//
// Contest APIs
//
// get all contests
router.get("/contest/", (request, response) => {
  Contest.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create contest
router.post("/contest/", (request, response) => {
  Contest.create(request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// get specific contest
router.get("/contest/:id/", (request, response) => {
  Contest.findOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// update specific contest
router.put("/contest/:id/", (request, response) => {
  Contest.replaceOne({ id: request.params.id }, request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// delete specific contest
router.delete("/contest/:id/", (request, response) => {
  Contest.deleteOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// get all contests of a specific college
router.get("/college/:id/contest", (request, response) => {
  Contest.find({ collegeId: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

//
// Internship APIs
//
// get all internship
router.get("/internship/", (request, response) => {
  Internship.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create internship
router.post("/internship/", (request, response) => {
  Internship.create(request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// get specific internship
router.get("/internship/:id/", (request, response) => {
  Internship.findOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// update specific internship
router.put("/internship/:id/", (request, response) => {
  Internship.replaceOne(
    { id: request.params.id },
    request.query,
    (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    }
  );
});

// delete specific internship
router.delete("/internship/:id/", (request, response) => {
  Internship.deleteOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

//
// Fellowship APIs
//
// get all fellowships
router.get("/fellowship/", (request, response) => {
  Fellowship.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create fellowship
router.post("/fellowship/", (request, response) => {
  Fellowship.create(request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// get specific fellowship
router.get("/fellowship/:id/", (request, response) => {
  Fellowship.findOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// update specific fellowship
router.put("/fellowship/:id/", (request, response) => {
  Fellowship.replaceOne(
    { id: request.params.id },
    request.query,
    (err, user) => {
      if (!err) {
        response.send(user);
      }
      console.log(err);
    }
  );
});

// delete specific fellowship
router.delete("/fellowship/:id/", (request, response) => {
  Fellowship.deleteOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

//
// Chat APIs
//
// get all chat
router.get("/chat/", (request, response) => {
  Chat.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create chat
router.post("/chat/", (request, response) => {
  Chat.create(request.query, (err, chat) => {
    if (!err) {
      response.send(chat);
    }
    console.log(err);
  });
});

// get specific chat
router.get("/chat/:id/", (request, response) => {
  Chat.findOne({ id: request.params.id }, (err, chat) => {
    if (!err) {
      response.send(chat);
    }
    console.log(err);
  });
});

// update specific chat
router.put("/chat/:id/", (request, response) => {
  Chat.replaceOne({ id: request.params.id }, request.query, (err, chat) => {
    if (!err) {
      response.send(chat);
    }
    console.log(err);
  });
});

// delete specific chat
router.delete("/chat/:id/", (request, response) => {
  Chat.deleteOne({ id: request.params.id }, (err, chat) => {
    if (!err) {
      response.send(chat);
    }
    console.log(err);
  });
});

//
// Blog APIs
//
// get all blog
router.get("/blog/", (request, response) => {
  Blog.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create blog
router.post("/blog/", (request, response) => {
  Blog.create(request.query, (err, blog) => {
    if (!err) {
      response.send(blog);
    }
    console.log(err);
  });
});

// get specific blog
router.get("/blog/:id/", (request, response) => {
  Blog.findOne({ id: request.params.id }, (err, blog) => {
    if (!err) {
      response.send(blog);
    }
    console.log(err);
  });
});

// update specific blog
router.put("/blog/:id/", (request, response) => {
  Blog.replaceOne({ id: request.params.id }, request.query, (err, blog) => {
    if (!err) {
      response.send(blog);
    }
    console.log(err);
  });
});

// delete specific blog
router.delete("/blog/:id/", (request, response) => {
  Blog.deleteOne({ id: request.params.id }, (err, blog) => {
    if (!err) {
      response.send(blog);
    }
    console.log(err);
  });
});

//
// experience APIs
//
// get all experience
router.get("/experience/", (request, response) => {
  experience.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create experience
router.post("/experience/", (request, response) => {
  experience.create(request.query, (err, experience) => {
    if (!err) {
      response.send(experience);
    }
    console.log(err);
  });
});

// get specific experience
router.get("/experience/:id/", (request, response) => {
  experience.findOne({ id: request.params.id }, (err, experience) => {
    if (!err) {
      response.send(experience);
    }
    console.log(err);
  });
});

// update specific experience
router.put("/experience/:id/", (request, response) => {
  experience.replaceOne(
    { id: request.params.id },
    request.query,
    (err, experience) => {
      if (!err) {
        response.send(experience);
      }
      console.log(err);
    }
  );
});

// delete specific experience
router.delete("/experience/:id/", (request, response) => {
  experience.deleteOne({ id: request.params.id }, (err, experience) => {
    if (!err) {
      response.send(experience);
    }
    console.log(err);
  });
});

router.get("/user/:id/experience", (request, response) => {
  experience.find(
    { where: { userId: request.params.id } },
    (err, experiences) => {
      if (!err) {
        response.send(experiences);
      }
      console.log(err);
    }
  );
});

//
// clubPost APIs
//
// get all experience
router.get("/clubPost/", (request, response) => {
  clubPost.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create clubPost
router.post("/clubPost/", (request, response) => {
  clubPost.create(request.query, (err, clubPost) => {
    if (!err) {
      response.send(clubPost);
    }
    console.log(err);
  });
});

// get specific clubPost
router.get("/clubPost/:id/", (request, response) => {
  clubPost.findOne({ id: request.params.id }, (err, clubPost) => {
    if (!err) {
      response.send(clubPost);
    }
    console.log(err);
  });
});

// update specific clubPost
router.put("/clubPost/:id/", (request, response) => {
  clubPost.replaceOne(
    { id: request.params.id },
    request.query,
    (err, clubPost) => {
      if (!err) {
        response.send(clubPost);
      }
      console.log(err);
    }
  );
});

// delete specific clubPost
router.delete("/clubPost/:id/", (request, response) => {
  clubPost.deleteOne({ id: request.params.id }, (err, clubPost) => {
    if (!err) {
      response.send(clubPost);
    }
    console.log(err);
  });
});

//
// studentPost APIs
//
// get all studentPost
router.get("/studentPost/", (request, response) => {
  studentPost.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create studentPost
router.post("/studentPost/", (request, response) => {
  studentPost.create(request.query, (err, studentPost) => {
    if (!err) {
      response.send(studentPost);
    }
    console.log(err);
  });
});

// get specific studentPost
router.get("/studentPost/:id/", (request, response) => {
  studentPost.findOne({ id: request.params.id }, (err, studentPost) => {
    if (!err) {
      response.send(studentPost);
    }
    console.log(err);
  });
});

// update specific studentPost
router.put("/studentPost/:id/", (request, response) => {
  studentPost.replaceOne(
    { id: request.params.id },
    request.query,
    (err, studentPost) => {
      if (!err) {
        response.send(studentPost);
      }
      console.log(err);
    }
  );
});

// delete specific studentPost
router.delete("/studentPost/:id/", (request, response) => {
  studentPost.deleteOne({ id: request.params.id }, (err, studentPost) => {
    if (!err) {
      response.send(studentPost);
    }
    console.log(err);
  });
});

// get all posts by a specific user
router.get("/user/:id/studentPost", (request, response) => {
  studentPost.find(
    { where: { userId: request.params.id } },
    (err, studentPosts) => {
      if (!err) {
        response.send(studentPosts);
      }
      console.log(err);
    }
  );
});

//
// clubOfStudent APIs
//
// get all clubOfStudent
router.get("/clubOfStudent/", (request, response) => {
  clubOfStudent.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create clubOfStudent
router.post("/clubOfStudent/", (request, response) => {
  clubOfStudent.create(request.query, (err, clubOfStudent) => {
    if (!err) {
      response.send(clubOfStudent);
    }
    console.log(err);
  });
});

// get specific clubOfStudent
router.get("/clubOfStudent/:id/", (request, response) => {
  clubOfStudent.findOne({ id: request.params.id }, (err, clubOfStudent) => {
    if (!err) {
      response.send(clubOfStudent);
    }
    console.log(err);
  });
});

// update specific clubOfStudent
router.put("/clubOfStudent/:id/", (request, response) => {
  clubOfStudent.replaceOne(
    { id: request.params.id },
    request.query,
    (err, clubOfStudent) => {
      if (!err) {
        response.send(clubOfStudent);
      }
      console.log(err);
    }
  );
});

// delete specific clubOfStudent
router.delete("/clubOfStudent/:id/", (request, response) => {
  clubOfStudent.deleteOne({ id: request.params.id }, (err, clubOfStudent) => {
    if (!err) {
      response.send(clubOfStudent);
    }
    console.log(err);
  });
});

// get all clubs a student belongs to
router.get("/user/:id/clubOfStudent", (request, response) => {
  clubOfStudent.find(
    { where: { userId: request.params.id } },
    (err, clubOfStudents) => {
      if (!err) {
        response.send(clubOfStudents);
      }
      console.log(err);
    }
  );
});

//
// studentInterest APIs
//
// get all experience
router.get("/studentInterest/", (request, response) => {
  studentInterest.find({}, (err, users) => {
    if (!err) {
      response.send(users);
    }
    console.log(err);
  });
});

// create studentInterest
router.post("/studentInterest/", (request, response) => {
  studentInterest.create(request.query, (err, studentInterest) => {
    if (!err) {
      response.send(studentInterest);
    }
    console.log(err);
  });
});

// get specific studentInterest
router.get("/studentInterest/:id/", (request, response) => {
  studentInterest.findOne({ id: request.params.id }, (err, studentInterest) => {
    if (!err) {
      response.send(studentInterest);
    }
    console.log(err);
  });
});

// update specific studentInterest
router.put("/studentInterest/:id/", (request, response) => {
  studentInterest.replaceOne(
    { id: request.params.id },
    request.query,
    (err, studentInterest) => {
      if (!err) {
        response.send(studentInterest);
      }
      console.log(err);
    }
  );
});

// delete specific studentInterest
router.delete("/studentInterest/:id/", (request, response) => {
  studentInterest.deleteOne(
    { id: request.params.id },
    (err, studentInterest) => {
      if (!err) {
        response.send(studentInterest);
      }
      console.log(err);
    }
  );
});

// get all interests of a specific user
router.get("/user/:id/studentInterest", (request, response) => {
  studentInterest.find(
    { where: { userId: request.params.id } },
    (err, experiences) => {
      if (!err) {
        response.send(experiences);
      }
      console.log(err);
    }
  );
});

module.exports = router;
