import Livros from "../models/Livro.js";

export default class LivroController {
  
  static listarLivros = (req, res) => {
    Livros.find((err, livros) => {
      return res.status(200).send(livros);
    });
  }

  static cadastrarLivro = (req, res) => {
    let livro = new Livros(req.body);

    livro.save((err) => {
      if (err) {
        return res.status(500).send({message: `${err.message} - falha ao cadastrar livros`})
      }
      return res.status(201).send(livro.toJSON());
    });
  }
}