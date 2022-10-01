const express = require("express");
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
  Club.create(
    { name: "MIC", yearFounded: 2020, numberOfMembers: 25 },
    (err, club) => {
      if (!err) {
        response.send(club);
      } else {
        console.log("Failed");
      }
    }
  );
  console.log("club created!");
});

// update club details
router.post("/clubs/:id/update/", (request, response) => {
  Club.updateOne(
    { id: request.params.id },
    { $set: { name: "Android Club" } },
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
