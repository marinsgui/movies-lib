import './styles.css';

import image from '../../assets/home-cinema-animate.svg';

export default function Home() {
    return (
        <main className='homepage'>
            <img src={image} />
            <h1>Bem-Vindo(a)!<br />Milhões de Filmes, Séries e Pessoas para Descobrir<br />Explore já!</h1>
        </main>
    )
}