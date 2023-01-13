import livros from "./livrosRoutes.js";
// import Express from "express";

// const routes = (app) => {
//   app.use(
//     Express.json(),
//     livros
//   );
// }

function routes (app) {
  livros(app);
}

export default routes;