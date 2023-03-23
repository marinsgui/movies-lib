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
        <header className='w-full md:sticky top-0 z-10 bg-purple-800 flex flex-col md:flex-row justify-around items-center shadow-md p-2 md:p-0'>
            <NavLink to='/'>
                <img src={logo} alt="MoviesLib logo" className='w-32 md:w-40' />
            </NavLink>
            
            <nav>
                <ul className='list-none flex justify-between items-center p-4 gap-2 md:gap-8'>
                    <li>
                        <NavLink to='/popular' className='font-bold text-xs md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300'>Filmes populares</NavLink>
                    </li>
                    <li>
                        <NavLink to='/topratedmovies' className='font-bold text-xs md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300'>Melhores filmes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/upcoming' className='font-bold text-xs md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300'>Próximos lançamentos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nowplaying' className='font-bold text-xs md:text-base text-white hover:text-gray-300 active:border-b-2 border-gray-300'>Filmes em cartaz</NavLink>
                    </li>
                </ul>
            </nav>
            
            <form className='flex items-center' onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Faça a sua busca'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className='w-full md:w-80 h-8 p-3 border-b-2 border-gray-200 text-lg bg-purple-900 outline-none text-white focus:border-white placeholder:text-gray-300'
                />
                <button className='h-8 w-12 bg-transparent border-none cursor-pointer'>
                    <FaSearch className='w-2/3 h-2/3 text-white' />
                </button>
            </form>
        </header>
    )
}