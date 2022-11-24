import './styles.css';

import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [allMovies, setAllMovies] = useState([]);

    const getAllMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setAllMovies(data.results)
    }

    useEffect(() => {
        const allMoviesUrl = `${moviesURL}popular?${apiKey}&language=pt-BR&region=BR`
        
        getAllMovies(allMoviesUrl)
    }, [])

      

    return (
        <div>
            <Header />
            <div className='container'>
                <h1>Últimos lançamentos</h1>
                <ul>
                    {allMovies.map(item => (
                        <li key={item.id}>
                            <img src={imageURL + item.poster_path} alt="Movie Poster" />
                            <h2>{item.title}</h2>
                            <p><span>Data de lançamento:</span> {item.release_date}</p>
                            <p><span>&#x2B50;</span> {item.vote_average}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}