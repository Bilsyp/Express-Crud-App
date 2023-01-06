// Connection Database
// @dec GET
// @access public
const User = require("../models/goalModel");
const { findData } = require("../data/dataRes");

const getData = async (req, res) => {
  try {
    const data = await findData();
    res.render("../views/index", {
      datax: data,
    });
    // res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};
// @dec POST
// @access public

const postData = async (req, res) => {
  if (!req.body.name) {
    throw new Error("please add");
  }
  const data = await User.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.render("../views/berhasil");
};

// @dec PUT
// @access public

const putData = (req, res) => {
  res.json({ message: "update post", data: req.params.id });
};

// @dec DELETE
// @access public

const deleteData = (req, res) => {
  res.json({ message: "delete post", data: req.params.id });
};

const details = async (req, res) => {
  const data = await User.find({ _id: req.params.id });
  // res.json(data);
  res.render("../views/details", {
    result: data,
  });
};

const formData = (req, res) => {
  res.render("../views/form");
};
module.exports = { getData, postData, deleteData, putData, details, formData };
