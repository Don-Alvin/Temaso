const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const UserRouter = require("../routes/userRoute");

const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.use("/", UserRouter);
app.use("/", UserRouter);

module.exports = app;
