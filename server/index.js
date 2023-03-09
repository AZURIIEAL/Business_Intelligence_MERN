import express from "express"; //Serverside framework.
import BodyParser from "body-parser"; //A middleware for loading data fast and seperately.
import mongoose from "mongoose"; //For Database.
import Cors from "cors"; //Cross-Origin Resource Sharing.
import dotenv from "dotenv"; //For Environment variables.
import helmet from "helmet"; //API Protection.
import morgan from "morgan"; //Logs the server.

import clientRoutes from "./routes/client.js"; //Importing the routes file.
import salesRoutes from "./routes/sales.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(Cors());

//ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000; //Setting another port 9000 apart from PORT(from env) as a backup.
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useunifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Port:${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect.`));
 