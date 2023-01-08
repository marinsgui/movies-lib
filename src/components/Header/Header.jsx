import './styles.css';

import { Link, useNavigate } from 'react-router-dom';
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
            <Link to='/'>
                <img src={logo} alt="MoviesLib logo" />
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/popular' className='link'>Filmes populares</Link>
                    </li>
                    <li>
                        <Link to='/topratedmovies' className='link'>Melhores filmes</Link>
                    </li>
                    <li>
                        <Link to='/upcoming' className='link'>Próximos lançamentos</Link>
                    </li>
                    <li>
                        <Link to='/nowplaying' className='link'>Filmes em cartaz</Link>
                    </li>
                </ul>
            </nav>
            
            <form className="search-bar" onSubmit={handleSubmit}>
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