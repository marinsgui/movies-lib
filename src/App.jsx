import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
