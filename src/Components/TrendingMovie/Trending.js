import React, { useState, useEffect } from "react";
import Card from "../Home/Card";
import { ArrowRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Select } from "@chakra-ui/react";
import './Trending.css'
import Loader from "../Loading/Loader";


const Trending = () => {
  const apiKey = "32eed4347e459ad7689eda839801bd90";
  const [category, setCategory]= useState("all")
  const trendingMoviesURL = `https://api.themoviedb.org/3/trending/${category}/week?api_key=${apiKey}`;
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    getTrendingMovie(trendingMoviesURL);
    setIsLoading(true)
  }, [category,trendingMoviesURL]);

  const getTrendingMovie = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    setTrendingMovie(results.slice(0, 20));
    setIsLoading(false)
  };
  const onChangeHandler=(e)=>{
    setCategory(e.target.value)
  }
  return (
    <>
      <div className="popular-movies-card movies container">
        <h2>
          Trending of The Week <ArrowRightIcon h={10} mb={1} />
        </h2>
        <Select fontSize={"2rem"} h={"5rem"} w={"20%"} fontWeight={"600"} size="lg" defaultValue={category} textAlign={"center"} mb={"4rem"} p={3} cursor={"pointer"} onChange={onChangeHandler} value={category}>
          <option id="option" color="black" value="all" >All</option>
          <option id="option" value="tv">Web Shows</option>
          <option id="option" value="movie">Movies</option>
        </Select>
        <section className="card-section popular-section">
          {isLoading? <Loader quantity={20}/>:trendingMovie.map((card) => {
            return (
              <Card
                key={card.id}
                movieImg={card.poster_path}
                movieName={card.name? card.name : card.title}
                popularity={card.vote_average.toFixed(1)}
                measure={"Rating"}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Trending;
