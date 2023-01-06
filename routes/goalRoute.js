const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  deleteData,
  putData,
  details,
  updateData,
  formData,
} = require("../controllers/goalController");

router.route("/").get(getData);
router.route("/form").get(formData).post(postData);
router.route("/update/:id").get(updateData).post(putData);
// .delete(deleteData);
router.route("/detail/:id").get(details);

module.exports = router;

// Mengatur Router page
