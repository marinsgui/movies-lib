import style from '../../styles/GlobalStyles.module.css';

import { useEffect, useState } from 'react';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function TopRatedMovies() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <main className={style.container}>
            <h1>Melhores filmes</h1>
            {topMovies.length === 0 && (
                <Loading />
            )}
            {topMovies.length > 0 && (
                <ul className={style.movies_container}>
                    {topMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}