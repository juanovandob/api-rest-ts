import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;  //process.env.DB_URI as string
  await connect(DB_URI);
}
export default dbConnect;


//better
/* import mongoose from "mongoose";

export const connectToMongoDB = async (): Promise<void> => {
  try {
    const DB_URI: string | undefined = process.env.DB_URI;

    if (!DB_URI) {
      throw new Error("La cadena de conexión de MongoDB no está definida en el archivo .env");
    }

    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Salir del proceso en caso de error
  }
}; */