import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
     .then(() => console.log('MongoDB connected'))
     .catch((err) => {
        console.error('failed to connect to mongodb')
        console.error(err)
     })
}

export default connectDB;