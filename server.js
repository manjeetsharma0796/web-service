const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const __path = path.resolve();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(
  cors({
    origin: true, // Reflects the request origin, essentially allowing all origins
  })
);

const PORT = process.env.PORT || 9000;

app.post("/test", (req, res) => {
  res.send({ test: "babe we on test, and chill there is more life" });
});

app.get("/", (req, res) => {
  res.sendFile(`${__path}/public/index.html`);
});

app.use(express.static(`${__path}/public`));

app.listen(`${PORT}`, () => {
  console.log("SSSSSSH, server is listening", `${PORT}`);
});
