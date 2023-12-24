import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./config/mongo";
//import routes
import { router } from "./routes";

const PORT = process.env.PORT || 3001;

// Importing the express module
const app = express();

// Using the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Using routes
app.use(router);

//Connect to Db
dbConnect()
  .then(() => {
    console.log("Connected to MongoDB");
})

// The app starts a server and listens on the specified PORT for connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Connect to the database and start the server
/* dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDb`)
      console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  }) */

