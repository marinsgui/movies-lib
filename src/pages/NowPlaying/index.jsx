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
        <main className='bg-gray-800 min-h-screen'>
            <h1 className='text-center text-5xl text-white pt-5'>Filmes em cartaz</h1>
            {playingMovies.length === 0 && (
                <Loading />
            )}
            {playingMovies.length > 0 && (
                <ul className='flex justify-around items-center flex-wrap gap-y-8 gap-x-6 w-4/5 mx-auto py-20'>
                    {playingMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}