import './styles.css';

import { useEffect, useState } from 'react';

export default function TopRatedMovies() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

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
        <ul>
            {topMovies.map(item => (
                <li key={item.id}>
                    <img src={imageURL + item.poster_path} alt="Movie Poster" />
                    <p>{item.title}</p>
                    <p>Nome original: {item.original_title}</p>
                    <p>{item.overview}</p>
                    <p>Data de lançamento: {item.release_date}</p>
                    <p>Nota: {item.vote_average}</p>
                </li>
            ))}
        </ul>
    )
}