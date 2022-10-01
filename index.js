const app = require("./app");

const port = process.env.PORT || 5000;

const routes = require("./router/user");

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
