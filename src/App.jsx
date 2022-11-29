import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import TopRatedMovies from './pages/TopRatedMovies';
import Details from './pages/Details';
import Home from './pages/Home';
import Search from './pages/Search';
import PopularMovies from './pages/Popular';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/popular' element={<PopularMovies />} />
          <Route path='/topratedmovies' element={<TopRatedMovies />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
