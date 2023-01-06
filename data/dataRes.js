const User = require("../models/goalModel");

const findData = async () => {
  try {
    const data = await User.find();

    return data;
  } catch (err) {
    return err;
  }
};

module.exports = { findData };
