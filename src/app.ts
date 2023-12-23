import "dotenv/config";
import express from "express";
import cors from "cors";
//import routes
import { router } from "./routes/item";

const PORT = process.env.PORT || 3001;

// Importing the express module
const app = express();

// Using the cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Using routes
app.use(router);

// The app starts a server and listens on the specified PORT for connections
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
