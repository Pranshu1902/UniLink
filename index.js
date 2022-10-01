const app = require("./app");

const port = process.env.PORT || 5000;

const routes = require("./router/user");

// home page route added
app.get("/", function (request, response) {
  response.sendFile("home.html", { root: __dirname });
});

// adding api routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
