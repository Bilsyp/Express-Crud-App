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

const putData = async (req, res) => {
  // Note tidak bisa menggunakan method put pada form jadi diganti post
  const data = await User.find({ _id: req.params.id });
  const datax = await User.updateOne(data, {
    $set: {
      name: req.body.name,
      email: req.body.email,
    },
  });

  res.render("../views/berhasil");
};

// @dec DELETE
// @access public

const deleteData = async (req, res) => {
  const data = User.find({ _id: req.params.id });
  const datax = await User.deleteOne(data);
  res.json({ message: "delete post", data: req.params.id });
};

const deletepage = async (req, res) => {
  const data = User.find({ _id: req.params.id });
  const datax = await User.deleteOne(data);
  res.render("../views/berhasil");
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

const updateData = async (req, res) => {
  const data = await User.find({ _id: req.params.id });

  data.forEach((element) => {
    res.render("../views/update", {
      name: element.name,
      email: element.email,
    });
  });

  // res.json(data);
};
module.exports = {
  getData,
  deletepage,
  postData,
  deleteData,
  putData,
  details,
  formData,
  updateData,
};
