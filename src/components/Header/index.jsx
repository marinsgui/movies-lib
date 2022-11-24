import './styles.css';

import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import logo from '../../assets/watchflix-logo.svg';

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logo} alt="Watchflix logo" />
            </Link>
            
            <nav>
                <ul>
                    <li>
                        <Link to='/releases' className='link'>Lançamentos</Link>
                    </li>
                    <li>
                        <Link to='/topratedmovies' className='link'>Melhores filmes</Link>
                    </li>
                </ul>
            </nav>
            
            <form className="search-bar">
                <input type="text" placeholder='Faça a sua busca' />
                <button>
                    <FaSearch />
                </button>
            </form>
        </header>
    )
}