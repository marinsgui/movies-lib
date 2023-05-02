import { NavLink } from "react-router-dom";

export default function NavLinks({ className }) {
  return (
    <ul className={`${className}`}>
      <li>
        <NavLink
          to="/popular"
          className="font-bold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-slate-100"
        >
          Filmes populares
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/topratedmovies"
          className="font-bold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-slate-100"
        >
          Melhores filmes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming"
          className="font-bold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-slate-100"
        >
          Próximos lançamentos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/nowplaying"
          className="font-bold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-slate-100"
        >
          Filmes em cartaz
        </NavLink>
      </li>
    </ul>
  );
}
