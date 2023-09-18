// app.js
import app from "./app";

// Database
import db from "./config/mongo";

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await db();
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

startServer();
