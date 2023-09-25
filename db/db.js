const mongoose = require("mongoose");

const Db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`DB connect SuccessFully !`);
  } catch (err) {
    console.log(`Error in Db connect :${err}`);
    process.exit(1);
  }
};
module.exports = Db;
