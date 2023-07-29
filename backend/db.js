const mongoose=require("mongoose");
const mongoUri="mongodb://localhost:27017/iNoteBook";

const connectToMongo = () => {
    mongoose.connect(mongoUri).then(()=>{
        console.log("Connnected to Mongo Successfully.")
    })
}

module.exports = connectToMongo;
