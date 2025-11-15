import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected Successfully!");
  } catch (error) {
    console.log("MongoDb Crashed", error);  
    process.exit(1); // uygulamayı sonlandırır
  }
};

// mongodb+srv://eypaln65_db_user:Lg0uACmlYskRUC9f@cluster0.mkzdtbg.mongodb.net/?appName=Cluster0
