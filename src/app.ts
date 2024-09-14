const mongoose = require('mongoose');
import express from "express"
import router  from "./routes/routes"


require("express-async-errors")
require("dotenv")
const app = express()


// start middleware
app.use(express.json())


//routes
app.use("/v1/api",router)


//connect to DB 


const uri = "mongodb+srv://scelogumede95:72664453@practice.kmvig.mongodb.net/USER?retryWrites=true&w=majority&appName=practice";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(3000,()=> console.log("server running"))
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err){
    // Ensures that the client will close when you finish/error
    console.error(err)
  }
}
run()





