import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import { ArrowLeft } from "lucide-react";

export default function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchUrl = import.meta.env.VITE_SEARCH;

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchQueryUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR&region=BR`;

    getSearchedMovies(searchQueryUrl);
  }, [query]);

  return (
    <main className="p-20 bg-gray-900">
      <div className="flex justify-between items-center gap-5 mb-10 text-gray-50  font-semibold">
        <Link to="/" className="flex items-center">
          <ArrowLeft size={30} color="rgb(249 250 251)" />
          Voltar
        </Link>
        <h1 className="text-5xl">Resultados para: {query}</h1>
      </div>
      {movies && (
        <ul className="flex justify-around items-center flex-wrap gap-8 mx-auto">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </ul>
      )}
    </main>
  );
}
