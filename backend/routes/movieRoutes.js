const express = require("express");

const {
  AddMovie,
  GetAllMovies,
  updateMovie,
  deletemovie,
} = require("../controllers/movies");
const Router = express.Router();
Router.post("/create", AddMovie);

Router.get("/getall", GetAllMovies);
Router.put("/editmovie/:id", updateMovie);
Router.delete("/deletemovie/:id", deletemovie);

module.exports = Router;
