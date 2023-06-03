const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
    'mongodb+srv://waqar105lguedu:5lK6ANhZMIvgl8Bc@growdigital.evyjard.mongodb.net/'
      );
    console.log('Connected to db!');
  } catch (error) {
    console.log('DB Connection', error);
  }
};

module.exports = connectDB;
