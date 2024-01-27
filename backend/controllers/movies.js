const Movie = require("../models/movie");
const AddMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.json(newMovie);
  } catch (error) {
    throw new Error(error);
  }
};

const GetAllMovies = async (req, res) => {
  try {
    const getall = await Movie.find();
    res.json(getall);
  } catch (error) {
    throw new Error(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatemovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatemovie);
  } catch (error) {
    throw new Error(error);
  }
};

const deletemovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletemovie = await Movie.findByIdAndDelete(id, req.body, {
      new: true,
    });
    res.json(deletemovie);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { AddMovie, GetAllMovies, updateMovie, deletemovie };
