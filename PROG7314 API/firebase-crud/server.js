const express = require("express");
const bodyParser = require("body-parser");
const db = require("./firebaseConfig");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//Create
app.post("/create", (req, res)=> {
  const data = req.body;
  const ref = db.ref("data");
  ref
    .push(data)
    .then(() => res.status(201).send("Data created successfully"))
    .catch(error => res.status(400).send(error))
});


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});