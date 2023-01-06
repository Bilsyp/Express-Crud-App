// const Siswa = require("../models/goalModel");
const User = require("../models/goalModel");
const test = async () => {
  await User.create({
    name: "Bilal Syahputra",
    email: "bilalsyah77@gmail.com",
  });
};

module.exports = { test };
