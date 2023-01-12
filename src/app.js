import express from "express";
import db from "./config/db.js";
import Livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de Conexao'));
db.once("open", () => console.log("Conectou com o banco"));

const app = express();
app.use(express.json());


const livros = [
  {
    id: 1,
    titulo: 'Laranja Mecanica'
  },
  {
    id: 2,
    titulo: 'algo'
  }
];

app.get('/', (req, res) => {
  return res.status(200).send('Oi')
})

app.get('/livros', (req, res) => {
  Livros.find((err, livros) => {
    res.status(200).send(livros);
  });
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  return res.status(200).send(livros);
});

app.put('/livros/:id', (req, res) => {
  let indice = buscaLivro(req.params.id);
  livros[indice].titulo = req.body.titulo;
  return res.status(200).send(livros);
});

app.delete('/livros/:id', (req, res) => {
  let {id} = req.params || null;
  let indice = buscaLivro(id);

  livros.splice(indice, 1);
  return res.status(200).send(livros);
});

function buscaLivro(id) {
  return livros.findIndex(a => a.id == id);
}

export default app