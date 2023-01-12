import app from "./app.js";

const port = 3000;


app.listen(port, () => {
  console.log(`Servidor Aberto na porta http://localhost:${port}`);
})