const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  deleteData,
  putData,
  details,
  formData,
} = require("../controllers/goalController");

router.route("/").get(getData);
router.route("/form").get(formData).post(postData);
router.route("/:id").put(putData).delete(deleteData);
router.route("/detail/:id").get(details);

module.exports = router;

// Mengatur Router page
