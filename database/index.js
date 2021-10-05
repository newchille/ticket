import mongoose from "mongoose";

const connectDB = () => {
  return mongoose.connect(process.env.DB_URL, {
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    auth: { authSource: "admin" },
  });
};

export default connectDB;
