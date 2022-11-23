import './styles.css';

import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <img src="src/assets/watchflix-logo.svg" alt="Watchflix logo" />
            <form className="search-bar">
                <input type="text" placeholder='Faça a sua busca' />
                <button>
                    <FaSearch />
                </button>
            </form>
        </header>
    )
}