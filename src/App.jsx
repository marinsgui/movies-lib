import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import TopRatedMovies from './pages/TopRatedMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/TopRatedMovies' element={<TopRatedMovies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
