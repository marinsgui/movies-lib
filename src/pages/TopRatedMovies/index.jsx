import { useEffect, useState } from "react";

import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function TopRatedMovies() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopRatedMovies = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <main className="bg-slate-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-center text-5xl text-black dark:text-white pt-5">
        Melhores filmes
      </h1>
      {loading && <Loading />}
      {topMovies && (
        <ul className="flex justify-around items-center flex-wrap gap-y-8 gap-x-6 w-4/5 mx-auto py-20">
          {topMovies.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </ul>
      )}
    </main>
  );
}
