const express = require("express");
const router = express.Router();

let Streams = require("../modals/streams.modal");

//GET
router.get("/", (req, res) => {
  Streams.find() //Finding all streams
    .then((streams) => res.json(streams))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.get("/:id", (req, res) => {
  Streams.findById(req.params.id) //Finding by id
    .then((stream) => res.json(stream))
    .catch((err) => res.status(400).json("Error :" + err));
});

//POST
router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const userid = req.body.userid;
  const newStream = new Streams({ title, description, userid });

  newStream
    .save() //Add a new document to collection
    .then(() => res.json("Stream Added..!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.post("/:id", (req, res) => {
  Streams.findById(req.params.id)
    .then((stream) => {
      stream.title = req.body.title;
      stream.description = req.body.description;

      stream
        .save()
        .then(() => res.json("Stream Updated"))
        .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
});

//Delete
router.delete("/:id", (req, res) => {
  Streams.findByIdAndDelete(req.params.id)
    .then(() => res.json("Stream deleted"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
