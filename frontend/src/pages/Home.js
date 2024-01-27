import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/movie/getall"
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleEdit = (movie) => {
    console.log("Edit movie:", movie);
  };

  const handleDelete = async (movie) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/movie/deletemovie/${movie._id}`
      );

      setMovies((prevMovies) => prevMovies.filter((m) => m._id !== movie._id));
      console.log("Movie deleted:", movie);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div>
      <h1>Watch Later List</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movies
            key={movie._id}
            movie={movie}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
