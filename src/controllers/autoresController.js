import Autor from "../models/Autor.js";

export default class AutorController {
  
  static listarAutor = (req, res) => {
    
    if (req.params.id) {
      Autor.findById(req.params.id, (err, autor) => {
        if(err) {
          return res.status(400).send({message: `${err.message} - Erro ao buscar autor`});
        }

        return res.status(200).send(autor);
      });
    }else {
      Autor.find((err, autor) => {
        return res.status(200).send(autor);
      });
    }
  }

  static cadastrarAutor = (req, res) => {
    let autor = new Autor(req.body);

    autor.save((err) => {

      if (err) {
        return res.status(500).send({message: `${err.message} - falha ao cadastrar autor`});
      }

      return res.status(201).send(autor.toJSON());
    });
  }

  static atualizarAutor = (req, res) => {
    let { id } = req.params;

    Autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {

      if (err) {
        return res.status(500).send({message: `${err.message} - Ocorreu um erro ao atualizar o autor`});
      }

      return res.status(200).send({message: 'autor atualizado com sucesso'});
    });
  }

  static excluirAutor = (req, res) => {
    let { id } = req.params;

    Autor.findByIdAndDelete(id, (err) => {
      if (err) {
        return res.status(500).send({message: `${err.message} - Ocorreu um erro ao remover o autor`});
      }
      
      return res.status(200).send({message: 'autor removido com sucesso'}); 
    });
  }
}