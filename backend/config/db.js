import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://khanmanik0000:YD4Dac4mCuZmKRmC@cluster0.6hawv.mongodb.net/');
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.