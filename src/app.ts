const express = require("express");
import bodyParser from "body-parser";
import usersRouter from "./routers/usersRouter";

const app = express();

app.use(bodyParser.json());
app.use("/users", usersRouter);

export default app;
