import mongoose from "mongoose"

mongoose.set('strictQuery', false);  // Add this line

const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB
