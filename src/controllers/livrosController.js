import Livros from "../models/Livro.js";

export default class LivroController {
  
  static listarLivros = (req, res) => {
    
    if (req.params.id) {
      Livros.findById(req.params.id)
        .populate('autor', 'nome')
        .exec((err, livros) => {

            if(err) {
              return res.status(400).send({message: `${err.message} - Erro ao buscar livro`});
            }

            return res.status(200).send(livros);
        });
    }else {
      Livros.find()
        .populate('autor')
        .exec((err, livros) => {
          return res.status(200).send(livros);
        });
    }
  }

  static cadastrarLivro = (req, res) => {
    let livro = new Livros(req.body);

    livro.save((err) => {

      if (err) {
        return res.status(500).send({message: `${err.message} - falha ao cadastrar livros`});
      }

      return res.status(201).send(livro.toJSON());
    });
  }

  static atualizarLivro = (req, res) => {
    let { id } = req.params;

    Livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {

      if (err) {
        return res.status(500).send({message: `${err.message} - Ocorreu um erro ao atualizar o livro`});
      }

      return res.status(200).send({message: 'livros atualizado com sucesso'});
    });
  }

  static excluirLivro = (req, res) => {
    let { id } = req.params;

    Livros.findByIdAndDelete(id, (err) => {
      if (err) {
        return res.status(500).send({message: `${err.message} - Ocorreu um erro ao remover o livro`});
      }
      
      return res.status(200).send({message: 'livros removido com sucesso'}); 
    });
  }

  static listarLivrosPorEditora = (req, res) => {
    const {editora} = req.query;

    Livros.find({'editora': editora}, {}, (err, livros) => {
      res.status(200).send(livros);
    })
  }
}