import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from '../../styles/Details.module.css';

export default function Details() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const {id} = useParams()
    const [movie, setMovie] = useState([])

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&region=BR`
        getMovie(movieUrl)
    }, [])
    
    return (
        <main className={style.movie_details}>
            <section>
                <div className={style.movie_header}>
                    <h2>{movie.title}</h2>
                    <p><span>Título original:</span> {movie.original_title}</p>
                </div>
                <div className={style.movie_info}>
                    <div>
                        <img src={imageURL + movie.poster_path} alt={movie.title} />
                        <h3>&#x2B50; {movie.vote_average}</h3>
                        <p><span>Duração:</span> {movie.runtime} min.</p>
                        {movie.genres && <p>{movie.genres[0].name}</p>}
                        {movie.genres?.[1] && <p>{movie.genres[1].name}</p>}
                        {movie.genres?.[2] && <p>{movie.genres[2].name}</p>}
                    </div>
                    <p>{movie.overview}</p>
                </div>
            </section>
        </main>
    )
}