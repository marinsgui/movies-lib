import '../Popular/styles.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Details from '../Details';
import Loading from '../../components/Loading';

export default function NowPlaying() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

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
        <main className='container'>
            <h1>Filmes em cartaz</h1>
            {playingMovies.length === 0 && (
                <Loading />
            )}
            {playingMovies.length > 0 && (
                <ul>
                    {playingMovies.map(item => (
                        <li key={item.id}>
                            <Link to={`/Details/${item.id}`} element={<Details />}>
                                <img src={imageURL + item.poster_path} alt="Movie Poster" />
                            </Link>
                            <h2>{item.title}</h2>
                            <p><span>Data de lançamento:</span> {item.release_date}</p>
                            <p>&#x2B50; {item.vote_average}</p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}