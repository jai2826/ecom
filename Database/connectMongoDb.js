import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
    // console.log("mongoose Connected")
  );

export default connectMongo