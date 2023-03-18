import style from '../../styles/MovieCard.module.css';

import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const imageURL = import.meta.env.VITE_IMG;

    return (
        <li className={style.card_container}>
            <div className={style.card_img}>
                <img src={imageURL + movie.poster_path} alt={movie.title} />
            </div>
            <div className={style.card_info}>
                <h2 className={style.card_title}>{movie.title}</h2>
                <p className={style.text_title}><span>Data de lançamento:</span> {movie.release_date}</p>
                <p className={style.text_body}>&#x2B50; {movie.vote_average}</p>
                <Link 
                    to={`/details/${movie.id}`} 
                    className={style.card_button}
                >
                    Veja mais
                </Link>
            </div>
        </li>
    )
}