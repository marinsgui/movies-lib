import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";

export default function Upcoming() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUpcomingMovies = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setUpcomingMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    const upcomingUrl = `${moviesURL}upcoming?${apiKey}&language=pt-BR&region=BR`;
    getUpcomingMovies(upcomingUrl);
  }, []);

  return (
    <main className="bg-slate-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-center text-5xl text-black font-semibold dark:text-white pt-5">
        Próximos lançamentos
      </h1>
      {loading && <Loading />}
      {upcomingMovies && (
        <ul className="flex justify-around items-center flex-wrap gap-y-8 gap-x-6 w-4/5 mx-auto py-20">
          {upcomingMovies.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </ul>
      )}
    </main>
  );
}
