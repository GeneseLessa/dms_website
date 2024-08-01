import mongoose from "mongoose";

const mongoURI = process.env.MONGO_CONNECTION;

async function main() {
  await mongoose.connect(mongoURI);
  console.log("Database connected");
}

export default main;
