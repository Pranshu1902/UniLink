const express = require("express");
const { response } = require("../app");
const router = express.Router();
const { College, User, Club, Contest } = require("../models/models");

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
router.post("/user/", (request, response) => {
  Contest.create(request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// get specific contest
router.get("/user/:id/", (request, response) => {
  Contest.findOne({ id: request.params.id }, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// update specific contest
router.put("/user/:id/", (request, response) => {
  Contest.replaceOne({ id: request.params.id }, request.query, (err, user) => {
    if (!err) {
      response.send(user);
    }
    console.log(err);
  });
});

// delete specific contest
router.delete("/user/:id/", (request, response) => {
  Contest.deleteOne({ id: request.params.id }, (err, user) => {
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
