const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const wordRoute = require("./route/wordRoute");
const userRoute = require("./route/userRoute");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "joi");

app.use("/api/v1/users", userRoute);
app.use("/api/v1/word",wordRoute)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is running");
});
