import style from '../../styles/GlobalStyles.module.css';

import { useState, useEffect } from 'react';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function PopularMovies() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopularMovies(data.results)
    }
    
    useEffect(() => {
        const popularMoviesUrl = `${moviesURL}popular?${apiKey}&language=pt-BR&region=BR`
        
        getPopularMovies(popularMoviesUrl)
    }, [])

    return (
        <main className={style.container}>
            <h1>Filmes populares</h1>
            {popularMovies.length === 0 && (
                <Loading />
            )}
            {popularMovies.length > 0 && (
                <ul className={style.movies_container}>
                    {popularMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}