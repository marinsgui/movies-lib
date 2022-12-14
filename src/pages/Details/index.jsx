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
        <main style={{backgroundImage: `url(${imageURL + movie.backdrop_path})` }}>
            <section>
                <div className={style.details_container}>
                    <img src={imageURL + movie.poster_path} alt="Movie poster" />
                    <div className={style.details}>
                        <h2>{movie.title}</h2>
                        <p><span>Título original:</span> {movie.original_title}</p>
                        <p>&#x2B50; {movie.vote_average}</p>
                        <p><span>Duração:</span> {movie.runtime} min.</p>
                        <p><span>Sinopse:</span> {movie.overview}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}