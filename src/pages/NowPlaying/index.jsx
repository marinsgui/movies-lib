import style from '../../styles/GlobalStyles.module.css';

import { useEffect, useState } from 'react';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function NowPlaying() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [playingMovies, setPlayingMovies] = useState([])

    const getPlayingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPlayingMovies(data.results)
    }

    useEffect(() => {
        const playingUrl = `${moviesURL}now_playing?${apiKey}&language=pt-BR&region=BR`
        getPlayingMovies(playingUrl)
    }, [])

    return (
        <main className={style.container}>
            <h1>Filmes em cartaz</h1>
            {playingMovies.length === 0 && (
                <Loading />
            )}
            {playingMovies.length > 0 && (
                <ul className={style.movies_container}>
                    {playingMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}