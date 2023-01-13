import app from "./app.js";

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Servidor Aberto na porta http://localhost:${port}`);
})