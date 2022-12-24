import Header from "./Components/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularShow from "./Components/PopularShow/PopularShow";
import Upcoming from "./Components/UpcomingMovie/Upcoming";
import Trending from "./Components/TrendingMovie/Trending";
import Error from "./Components/Error/Error";
import SearchResult from "./Components/Search/SearchResult";
function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popularshow" element={<PopularShow />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
