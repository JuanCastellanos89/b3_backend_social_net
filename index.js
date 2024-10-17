import express from "express";
import connection from "./database/connection.js";
import cors from "cors";
import bodyParser from "body-parser";

console.log("API Node en ejecucion");

connection();

const app = express();
const puerto = process.env.PORT || 3900;

app.use(cors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.listen(puerto, () => {
    console.log("Servidor de node ejecutandose en el puerto: ", puerto);
});

export default app;