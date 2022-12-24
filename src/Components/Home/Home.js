import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import axios from "axios";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Loader from "../Loading/Loader";

const Home = () => {
  const apiKey = "32eed4347e459ad7689eda839801bd90";
  const PopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const topRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const nowPlayingMovieURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=2`;
  const upcomingMovieURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, settopRatedData] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getPopularMovie(PopularMoviesURL);
      getToRatedMovie(topRatedMoviesURL);
      getNowPlayingMovie(nowPlayingMovieURL);
      getUpcomingMovie(upcomingMovieURL);
    }, 1000);
  }, [
    PopularMoviesURL,
    topRatedMoviesURL,
    nowPlayingMovieURL,
    upcomingMovieURL,
  ]);

  const getPopularMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    setPopularData(results.slice(0, 10));
    setIsLoading(false);
  };
  const getToRatedMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    settopRatedData(results.slice(0, 10));
    setIsLoading(false);
  };
  const getNowPlayingMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    setNowPlaying(results.slice(0, 5));
    setIsLoading(false);
  };
  const getUpcomingMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);

    setUpcoming(results.slice(0, 10));
    setIsLoading(false);
  };

  return (
    <main className="container">
      <section className="hero-section">
        <img
          src={`https://image.tmdb.org/t/p/original/${upcoming[2]?.backdrop_path}`}
          alt=""
        />
      </section>
      <div className="popular-movies-card movies">
        <h2>
          Now Playing <ArrowRightIcon h={10} mb={1} />
        </h2>

        <section className="card-section popular-section">
          {isLoading ? (
            <Loader quantity={20} />
          ) : (
            nowPlaying.map((card) => {
              return (
                <Card
                  key={card.id}
                  movieImg={card.poster_path}
                  movieName={card.title}
                  popularity={card.vote_average}
                  measure={"Rating"}
                />
              );
            })
          )}
        </section>
      </div>

      <div className="popular-movies-card movies">
        <h2>
          Our Populars <ArrowRightIcon h={6} mb={1} />
        </h2>
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
      <div className="popular-movies-card movies">
        <h2>
          Top Rated <ArrowRightIcon h={6} mb={1} />
        </h2>
        <section className="card-section popular-section">
          {isLoading ? (
            <Loader quantity={20} />
          ) : (
            topRatedData.map((card) => {
              return (
                <Card
                  key={card.id}
                  movieImg={card.poster_path}
                  movieName={card.title}
                  popularity={card.vote_average}
                  measure={"Rating"}
                />
              );
            })
          )}
        </section>
      </div>
      <div className="popular-movies-card movies">
        <h2>
          Upcoming <ArrowRightIcon h={6} mb={1} />
        </h2>
        <section className="card-section popular-section">
          {isLoading ? (
            <Loader quantity={20} />
          ) : (
            upcoming.map((card) => {
              return (
                <Card
                  key={card.id}
                  movieImg={card.poster_path}
                  movieName={card.title}
                  popularity={card.vote_average}
                  measure={"Rating"}
                />
              );
            })
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
