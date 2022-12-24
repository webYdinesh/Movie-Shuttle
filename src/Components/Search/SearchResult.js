import React, { useState, useEffect } from "react";
import Loader from "../Loading/Loader";
import axios from "axios";
import Card from "../Home/Card";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
const SearchResult = () => {

const apiKey = "32eed4347e459ad7689eda839801bd90";
const searchQuery =  useSelector(state=>state.SearchSliceReducer.searchValue)

const searchURL=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
const [searchMovie, setSearchMovie] = useState([]);
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getSearch(searchURL);
  }, [searchURL]);
  const getSearch = async (URL) => {
    const {
      data: { results },
    } = await axios.get(URL);
    setSearchMovie(results.slice(0, 20));
    setIsLoading(false);
  };

  return (
    <>
      <div className="popular-movies-card movies container">
        <h2>
          Search Result <ArrowRightIcon h={10} mb={1} />
        </h2>
        <section className="card-section popular-section">
          {isLoading ? (
            <Loader quantity={20} />
          ) : (
            searchMovie.map((card) => {
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
export default SearchResult;
