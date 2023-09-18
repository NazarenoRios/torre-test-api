//Server Config.
import "dotenv/config.js";
import "./models";
import express from "express";
import cors from "cors";
import corsConfig from "./config/cors";
import setHeaders from "./middleware/setHeaders";

// Express Route File Requires
import routes from "./routes";

const app = express();

//Middleware
app.use(express.json());
app.use("/", setHeaders);
app.use(cors(corsConfig));

// Express Routing
app.use("/api", routes);

export default app;
