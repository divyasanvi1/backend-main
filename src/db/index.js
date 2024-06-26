import mongoose from 'mongoose'
import { DB_NAME } from "../constantfile.js"
const connectDB=async()=>{
    console.log(process.env.MONGODB_URI);
    try{
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST :${
        connectionInstance.connection.host}`)
       // console.log(connectionInstance);
       
    }
    catch(error)
    {
        console.log("MONGO_DB connection failed :",error);
        process.exit(1);
    }
}

export default connectDB;