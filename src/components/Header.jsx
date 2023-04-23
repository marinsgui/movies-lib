import { NavLink, useNavigate } from "react-router-dom";

import { useState } from "react";

import { FaSearch, FaSun, FaMoon, FaWindowClose } from "react-icons/fa";

import logo from "../assets/movies-lib-logo.svg";

import { useTheme } from "../hooks/useTheme";

import NavLinks from "./NavLinks";

import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [showLinks, setShowLinks] = useState(false);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-purple-800 flex flex-col md:flex-row justify-around items-center shadow-sm shadow-black p-2 md:p-0">
      <div className="flex md:justify-around md:gap-10 items-center mb-4 md:mb-0">
        <NavLink to="/">
          <img
            src={logo}
            alt="MoviesLib logo"
            className="w-32 md:w-40 mr-36 md:mr-0"
          />
        </NavLink>

        <HamburgerMenu
          className="md:hidden text-white h-10 w-5 mr-5"
          handleClick={() => setShowLinks(!showLinks)}
        />

        {theme === "light" && (
          <FaMoon
            size={25}
            title="Adicionar modo escuro"
            className="text-white cursor-pointer md:hidden"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
        {theme === "dark" && (
          <FaSun
            size={25}
            title="Adicionar modo claro"
            className="text-white cursor-pointer md:hidden"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
      </div>

      <nav>
        <NavLinks className="hidden md:flex list-none justify-between items-center p-4 gap-2 md:gap-8" />
        {showLinks && (
          <div className="w-full h-screen">
            <FaWindowClose
              size={30}
              color="white"
              className="absolute top-15 right-10"
              onClick={() => setShowLinks(!showLinks)}
            />
            <NavLinks className="flex flex-col justify-center items-center gap-28 h-[80vh] text-3xl" />
          </div>
        )}
      </nav>

      <form className="flex items-center relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Faça a sua busca"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="md:w-80 h-8 p-3 border-b-2 border-gray-200 text-lg bg-purple-900 outline-none text-white focus:border-white placeholder:text-gray-300"
        />
        <button className="cursor-pointer absolute right-0 pr-2">
          <FaSearch size={20} className="text-white" />
        </button>
      </form>

      {theme === "light" && (
        <FaMoon
          size={25}
          title="Adicionar modo escuro"
          className="text-white cursor-pointer hidden md:block"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
      {theme === "dark" && (
        <FaSun
          size={25}
          title="Adicionar modo claro"
          className="text-white cursor-pointer hidden md:block"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </header>
  );
}
