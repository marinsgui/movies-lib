import { NavLink } from "react-router-dom";

export default function NavLinks({ className }) {
  return (
    <ul className={`${className}`}>
      <li>
        <NavLink
          to="/popular"
          className="font-bold text-white hover:text-gray-300 active:border-b-2 border-gray-300"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid white" : "",
            };
          }}
        >
          Filmes populares
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/topratedmovies"
          className="font-bold text-white hover:text-gray-300 active:border-b-2 border-gray-300"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid white" : "",
            };
          }}
        >
          Melhores filmes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming"
          className="font-bold text-white hover:text-gray-300 active:border-b-2 border-gray-300"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid white" : "",
            };
          }}
        >
          Próximos lançamentos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/nowplaying"
          className="font-bold text-white hover:text-gray-300 active:border-b-2 border-gray-300"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid white" : "",
            };
          }}
        >
          Filmes em cartaz
        </NavLink>
      </li>
    </ul>
  );
}
