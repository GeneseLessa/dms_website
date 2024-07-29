import mongoose from "mongoose";

const mongoURL = process.env.DB_CONNECTION;

async function main() {
  await mongoose.connect(mongoURL);
}

export default main;
