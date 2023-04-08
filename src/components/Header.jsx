import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-2 lg:px-1'>
            <div className='relative flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6 text-blue-500'></BoltIcon>
                    <span className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>Next page</span>
                </Link>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-purple-700' : ''}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/books'
                            className={({ isActive }) => isActive ? 'text-purple-700' : ''}
                        >Books</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ? 'text-purple-700' : ''}
                        >About us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;