const express = require("express");
const app = express();
const port = 5000;

function logger(req, res, next) {
//   console.table({ method: req.method, path: req.url });
    next();
}

app.use(logger)
app.use(express.static("public"))

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/products", (req, res) => {
//   res.sendFile(__dirname + "/public/products.html");
// });

// app.get("/css/style.css", (req, res) => {
//   res.sendFile(__dirname + "/public/css/style.css");
// });

//start the server
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
