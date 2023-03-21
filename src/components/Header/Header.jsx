import style from '../../styles/Header.module.css';

import { NavLink, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import logo from '../../assets/movies-lib-logo.svg';

export default function Header() {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return;

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <header>
            <NavLink to='/'>
                <img src={logo} alt="MoviesLib logo" />
            </NavLink>
            
            <nav>
                <ul>
                    <li>
                        <NavLink to='/popular' className={style.link}>Filmes populares</NavLink>
                    </li>
                    <li>
                        <NavLink to='/topratedmovies' className={style.link}>Melhores filmes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/upcoming' className={style.link}>Próximos lançamentos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nowplaying' className={style.link}>Filmes em cartaz</NavLink>
                    </li>
                </ul>
            </nav>
            
            <form className={style.search_bar} onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Faça a sua busca'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <button>
                    <FaSearch />
                </button>
            </form>
        </header>
    )
}