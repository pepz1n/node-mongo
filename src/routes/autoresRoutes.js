import AutorController from "../controllers/autoresController.js";

export default (app) => {
  app.get('/autores', AutorController.listarAutor);
  app.get('/autores/:id', AutorController.listarAutor);
  app.post('/autores', AutorController.cadastrarAutor);
  app.put('/autores/:id', AutorController.atualizarAutor);
  app.delete('/autores/:id',AutorController.excluirAutor)
}