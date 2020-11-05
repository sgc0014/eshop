const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const condb = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    
    console.log(`db connected ${condb.connection.host}`)
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
