const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const MODE = process.env.NODE_ENV;

let app = express();
app.use(compression());

app.use(morgan("tiny"));

app.use('/', express.static("public", { maxAge: "1h" }));
app.use('/', express.static("public/build", { immutable: true, maxAge: "1y" }));

app.all(
  "*",(req, res, next) => {
    const build = require("./build");
    return createRequestHandler({ build, mode: MODE, getLoadContext })(req, res, next);
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
