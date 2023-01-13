import LivroController from "../controllers/livrosController.js";
// import Express from "express";

// const router = Express.Router();

// router
//   .get("/livros", LivroController.listarLivros);

// export default router;


export default (app) => {
  app.get('/livros', LivroController.listarLivros);
  app.get('/livros/:id', LivroController.listarLivros);
  app.post('/livros', LivroController.cadastrarLivro);
  app.put('/livros/:id', LivroController.atualizarLivro);
}