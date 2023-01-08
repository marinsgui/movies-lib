import style from '../../styles/Home.module.css';

import image from '../../assets/home-cinema-animate.svg';

export default function Home() {
    return (
        <main className={style.homepage}>
            <img src={image} />
        </main>
    )
}