import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = ({ movie, onEdit, onDelete }) => {
  const confirmDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (shouldDelete) {
      onDelete(movie);
    }
  };

  return (
    <div className="movie-card">
      <Link to={movie.Link} target="_blank" className="link">
        {movie.Moviename}
      </Link>
      <p>
        <strong>Platform:</strong> {movie.Platform}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Link:</strong> {movie.Link}
      </p>
      <div className="buttons">
        <button onClick={confirmDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Movies;
