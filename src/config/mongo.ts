import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_NAME = process.env.DB_NAME;
  const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING.replace(
    "<DB_USER>",
    DB_USER
  )
    .replace("<DB_PASSWORD>", DB_PASSWORD)
    .replace("<DB_NAME>", DB_NAME);

  try {
    await connect(DB_CONNECTION_STRING);
    console.log("Conexión a la base de datos exitosa.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

export default dbConnect;
