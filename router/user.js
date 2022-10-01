const express = require("express");
const router = express.Router();

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
