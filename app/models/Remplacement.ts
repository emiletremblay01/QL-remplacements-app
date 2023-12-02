import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL as string);
mongoose.Promise = global.Promise;
