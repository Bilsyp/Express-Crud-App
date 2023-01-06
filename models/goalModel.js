const mongoose = require("mongoose");

const siswaSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timesStamps: true,
  }
);
const userShcema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timesStamps: true,
  }
);
const Siswa = mongoose.model("Siswa", siswaSchema);
const User = mongoose.model("User", userShcema);

module.exports = User;
