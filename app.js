const express = require("express");
const path = require("node:path");

const app = express();

// app.set("view", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(express.urlencoded({ extended: true }));

// Routers
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
