const express = require("express");
const app = express();
const PORT = 4000;
//Following lines are to make sure our app can parse the json data
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const db = require("./models");

const userRoute = require("./routes/user.routes");
const postRoute = require("./routes/post.routes");

db.sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
