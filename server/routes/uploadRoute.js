const express = require("express");
const multer = require("multer");
const Router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
function checkFileType(file, cb) {
  console.log("1", path.extname(file.originalname));
  const fileType = /jpeg|jpg|png/;
  const extname = fileType.test(path.extname(file.originalname));

  if (extname) {
    console.log("2");
    return cb(null, true);
  } else {
    console.log("3");
    cb(null, false);
    return cb(new Error('Invalid type'));
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
Router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file)
  res.send(`http://localhost:5000/uploads/${req.file.filename}`);
});

module.exports = Router;
