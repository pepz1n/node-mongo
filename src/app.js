import express from "express";
import 'dotenv/config';
import db from "./config/db.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de Conexao'));
db.once("open", () => console.log("Conectou com o banco"));

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


routes(app);
app.use((req, res) =>  res.status(404).send('404 - pagina não encontrada'));

export default app