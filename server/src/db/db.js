import mongoose from "mongoose";

const configDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("MONGODB Error: ", error);
  }
};

export default configDB;
