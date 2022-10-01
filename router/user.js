const express = require("express");
const router = express.Router();
const { User, Club } = require("../models/user");

// club APIs

// get all clubs
router.get("/clubs", (request, response) => {
  Club.find({}, (err, clubs) => {
    response.send(clubs);
  });
});

// get club by id
router.get("/clubs/:id", (request, response) => {
  Club.findById(id, (err, clubs) => {
    response.send(clubs);
  });
});

// create new club, PENDING
router.post("/clubs/", (request, response) => {
  Club.insertOne({ name: "GDSC", yearFounded: 2019, numberOfMembers: 50 });
});

// update club details, PENDING
router.post("/clubs/:id/update", (response, request) => {
  Club.replaceOne({ id }, (err, res) => {
    if (err) {
      console.log(err);
    }
    response.send(res);
  });
});

// delete club
router.post("/clubs/:id", (request, response) => {
  Club.deleteOne({ id: id }, (err, res) => {
    if (err) {
      console.log(err);
    }
    response.send(res);
  });
});

// user APIs

router.get("/", (req, res) => {
  res.send("userlist");
});

router.get("/new", (req, res) => {
  res.send("usernew");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    //advanced routing used to get id of the user can be userid too not predefinded
    //console.log(req.user)
    User.findOne({ id: id });
    res.send(`Get user id ${req.params.id}`);
  })
  .put((req, res) => {
    //advanced routing used to get id of the user can be userid too not predefinded
    req.params.id;
    res.send(`update user id ${req.params.id}`);
  })
  .delete((req, res) => {
    //advanced routing used to get id of the user can be userid too not predefinded
    req.params.id;
    res.send(`delete user id ${req.params.id}`);
  });

const users = [{ name: "rohan" }, { name: "sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next(); //next fn
});

module.exports = router;
