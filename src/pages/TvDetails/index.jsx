import '../Details/styles.css';

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function TvDetails() {
    const tvShowsURL = import.meta.env.VITE_API_TV;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const {id} = useParams()
    const [tvShow, setTvShow] = useState([])

    const getTvShow = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTvShow(data)
        console.log(data)
    }

    useEffect(() => {
        const tvShowsUrl = `${tvShowsURL}${id}popular?${apiKey}&language=pt-BR`
        getTvShow(tvShowsUrl)
    }, [])

    return (
        <main style={{backgroundImage: `url(${imageURL + tvShow.backdrop_path})` }}>
            <section>
                <div className='details-container'>
                    <img src={imageURL + tvShow.poster_path} alt="TV Show poster" />
                    <div className='details'>
                        <h2>{tvShow.name}</h2>
                        <p><span>Título original:</span> {tvShow.original_name}</p>
                        <p>&#x2B50; {tvShow.vote_average}</p>
                        <p><span>Duração:</span> {tvShow.episode_run_time} min.</p>
                        <p><span>Temporadas:</span> {tvShow.number_of_seasons}</p>
                        <p><span>Sinopse:</span> {tvShow.overview}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}