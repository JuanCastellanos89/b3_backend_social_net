import { connect } from "mongoose";
import dotenv from  "dotenv";

dotenv.config();

const connection = async() => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Conectado correctamete a bd_social_network");
    } catch (error) {
        console.log("Error al conectar la base de datos", error);
        throw new Error("No se a podido conectar a la base de datos...");
    }
};

export default connection;