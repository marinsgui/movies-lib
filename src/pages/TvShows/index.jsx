import '../Releases/styles.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import TvDetails from '../TvDetails';
import Loading from '../../components/Loading';


export default function TvShows() {
    const tvShowsURL = import.meta.env.VITE_API_TV;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [tvShows, setTvShows] = useState([])

    const getTvShows = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTvShows(data.results)
    }

    useEffect(() => {
        const tvShowsUrl = `${tvShowsURL}popular?${apiKey}&language=pt-BR`
        getTvShows(tvShowsUrl)
    }, [])

    return (
        <main className='container'>
            <h1>Séries populares</h1>
            {tvShows.length === 0 && (
                <Loading />
            )}
            {tvShows.length > 0 && (
                <ul>
                    {tvShows.map(show => (
                        <li key={show.id}>
                            <Link to={`/tvdetails/${show.id}`} element={<TvDetails />}>
                                <img src={imageURL + show.poster_path} alt="Series poster" />
                            </Link>
                            <h2>{show.name}</h2>
                            <p><span>Data de lançamento:</span> {show.first_air_date}</p>
                            <p>&#x2B50; {show.vote_average}</p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}