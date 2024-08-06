const mongoose=require("mongoose");

const URI=process.env.MONGO_DB_URI;
const connectDB = async() =>{
    try {
        await mongoose.connect(URI)
        console.log("connected to DB");
    } catch (error) {
        console.log(URI)
        console.error("database connection has failed");
        process.exit(1);
    }
}
module.exports=connectDB;
