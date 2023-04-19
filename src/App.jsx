import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import TopRatedMovies from "./pages/TopRatedMovies";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PopularMovies from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import NowPlaying from "./pages/NowPlaying";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/topratedmovies" element={<TopRatedMovies />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
