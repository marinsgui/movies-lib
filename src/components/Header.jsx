import { Link } from "react-router-dom";

import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "../hooks/useTheme";

import { Clapperboard } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="w-full px-2 md:px-20 py-1 sticky top-0 z-10 bg-gray-900
      flex justify-between items-center
      shadow-sm shadow-black/10 
    "
    >
      <Link to="/">
        <Clapperboard size={50} color="rgb(129 140 248)" />
      </Link>

      <div className="flex gap-5 text-gray-200 font-semibold">
        <Link to="/">
          Filmes
        </Link>
        <Link to="/tvshows">
          Séries
        </Link>
      </div>
    </header>
  );
}
