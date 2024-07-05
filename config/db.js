const mongoose = require("mongoose");
// const { MONGO_CONNECTION_URI } = require("./keys");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://lcs2021052:sushma11@cluster0.ttmmevm.mongodb.net/learnflow?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDb;
