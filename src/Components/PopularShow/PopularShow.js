import React, { useState, useEffect } from "react";
import "./PopularShow.css";
import Card from "../Home/Card";
import { ArrowRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import "../Home/Card.css";
import Button from "../Button/Button";
import Loader from "../Loading/Loader";
const PopularShow = () => {
  const apiKey = "32eed4347e459ad7689eda839801bd90";
  const [page, setpage] = useState(1);
  const PopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const [popularData, setPopularData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPopularMovie(PopularMoviesURL);
    setIsLoading(true);
  }, [page,PopularMoviesURL]);
  const incrementHandler = () => {
    if (page >= 50) {
      setpage(50);
    } else {
      setpage(page + 1);
    }
  };
  const decrementHandler = () => {
    if (page < 2) {
      setpage(1);
    } else {
      setpage(page - 1);
    }
  };
  const getPopularMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    setPopularData(results.slice(0, 20));
    setIsLoading(false);
  };
  return (
    <>
      <div className="popular-movies-card movies container">
        <h2>
          Our Popular <ArrowRightIcon h={10} mb={1} />
        </h2>
        <Button
          increment={page}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />
        <section className="card-section popular-section">
          {isLoading ? (
            <Loader quantity={20} />
          ) : (
            popularData.map((card) => {
              return (
                <Card
                  key={card.id}
                  movieImg={card.poster_path}
                  movieName={card.title}
                  popularity={card.popularity.toFixed(1)}
                  measure={"Popularity"}
                />
              );
            })
          )}
        </section>
      </div>
    </>
  );
};

export default PopularShow;
