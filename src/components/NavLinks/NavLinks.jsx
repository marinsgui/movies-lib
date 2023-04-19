import { NavLink } from "react-router-dom";

export default function NavLinks({ className }) {
  return (
    <ul className={`${className}`}>
      <li>
        <NavLink
          to="/popular"
          className="font-bold md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300"
        >
          Filmes populares
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/topratedmovies"
          className="font-bold md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300"
        >
          Melhores filmes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming"
          className="font-bold md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300"
        >
          Próximos lançamentos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/nowplaying"
          className="font-bold md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300"
        >
          Filmes em cartaz
        </NavLink>
      </li>
    </ul>
  );
}
