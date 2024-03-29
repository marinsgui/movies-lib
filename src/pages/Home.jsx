import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchInput from "../components/SearchInput";
import MovieList from "../components/MovieList";

export default function Home() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("popular");
  const [loading, setLoading] = useState(false);

  const getMovies = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    const selectedMovieItem = menuItems.find(
      (item) => item.path === selectedMovie
    );
    const moviesUrl = `${moviesURL}${
      selectedMovie || selectedMovieItem.path
    }?${apiKey}&language=pt-BR&region=BR`;

    getMovies(moviesUrl);
  }, [selectedMovie]);

  const menuItems = [
    {
      text: "Populares",
      path: "/popular",
      id: 1,
    },
    {
      text: "Maiores avaliações",
      path: "/top_rated",
      id: 2,
    },
    {
      text: "Próximos Lançamentos",
      path: "/upcoming",
      id: 3,
    },
    {
      text: "Em cartaz",
      path: "/now_playing",
      id: 4,
    },
  ];

  function showCategoryName() {
    switch (selectedMovie) {
      case "/popular":
        return "Populares";
      case "/top_rated":
        return "Maiores avaliações";
      case "/upcoming":
        return "Próximos Lançamentos";
      case "/now_playing":
        return "Em cartaz";
      default:
        return "Populares";
    }
  }

  return (
    <main className="flex flex-col gap-5 px-5 min-h-screen md:px-20 bg-gray-900 bg-[url('./assets/background.svg')] bg-cover bg-center">
      <h1 className="text-6xl font-semibold text-gray-50 mt-20">MoviesLib</h1>
      <SearchInput />

      <nav className="mx-auto md:mx-0 md:w-[810px] flex justify-center items-center gap-1 md:gap-2 p-1 rounded-xl bg-black/20">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 md:py-2 md:px-8 text-xs md:text-base rounded-lg font-semibold cursor-pointer ${
              selectedMovie === item.path
                ? "bg-indigo-400 text-gray-50"
                : "text-gray-300"
            }`}
            onClick={() => setSelectedMovie(item.path)}
          >
            {item.text}
          </div>
        ))}
      </nav>

      <h2 className="text-gray-400 text-4xl font-semibold py-5">
        {showCategoryName()}
      </h2>

      <section className="pb-20">
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mx-auto">
          {loading ? 
                movies.map(() => (
                <Skeleton
                  count={1}
                  baseColor="rgb(16, 29, 58)"
                  highlightColor="rgba(17, 24, 39, 0.5)"
                  duration={1}
                  className="w-40 h-56
        md:w-72 md:h-96 rounded-2xl"
                />
              ))
            : movies.map((movie) => <MovieList movie={movie} key={movie.id} />)}
        </ul>
      </section>
    </main>
  );
}
