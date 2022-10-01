const express = require("express");
const { response } = require("../app");
const router = express.Router();
const { User, Club } = require("../models/user");

// club APIs

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
router.post("/user/", (request, response) => {
  User.create(request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
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

// const users = [{ name: "rohan" }, { name: "sally" }];
// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   next(); //next fn
// });

module.exports = router;
