import './styles.css';

import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <img src="../../src/assets/watchflix-logo.svg" alt="Watchflix logo" />
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