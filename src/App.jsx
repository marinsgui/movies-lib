import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Releases from './pages/Releases';
import TopRatedMovies from './pages/TopRatedMovies';
import Details from './pages/Details';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import TvDetails from './pages/TvDetails';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/releases' element={<Releases />} />
          <Route path='/topratedmovies' element={<TopRatedMovies />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/tvdetails/:id' element={<TvDetails />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
