import style from '../../styles/GlobalStyles.module.css';

import { useEffect, useState } from 'react';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function Upcoming() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [upcomingMovies, setUpcomingMovies] = useState([])

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUpcomingMovies(data.results)
    }

    useEffect(() => {
        const upcomingUrl = `${moviesURL}upcoming?${apiKey}&language=pt-BR&region=BR`
        getUpcomingMovies(upcomingUrl)
    }, [])

    return (
        <main className={style.container}>
            <h1>Próximos lançamentos</h1>
            {upcomingMovies.length === 0 && (
                <Loading />
            )}
            {upcomingMovies.length > 0 && (
                <ul className={style.movies_container}>
                    {upcomingMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}