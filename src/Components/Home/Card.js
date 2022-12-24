import React from "react";
import './Card.css'
const Card = ({ movieName,popularity,movieImg,measure}) => {
  return (
    <div className="card-container">
      <div className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieImg}`}
          alt="Movies"
        />
      </div>
      <div className="movie-text">
      <h3>{movieName}</h3>
      <h3>{measure} : {popularity}</h3>

      </div>
    </div>
  );
};

export default Card;
