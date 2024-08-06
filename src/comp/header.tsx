import React, { useState, useEffect } from 'react';
import logo from '../assets/loga.png';

interface HeaderState {
    isScrolled: boolean;
    isMenuOpen: boolean;
}

const Header: React.FC = () => {
    const [state, setState] = useState<HeaderState>({ isScrolled: false, isMenuOpen: false });

    useEffect(() => {
        const handleScroll = () => {
            setState((prevState) => ({ ...prevState, isScrolled: window.scrollY > 0 }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }));
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50 pr-4
            ${state.isScrolled
                ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md'
                : 'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
                <img
                    src={logo}
                    className="w-20 h-20"
                    alt='Pocket profit'
                />

                {/* Toggle button only for small screens */}
                <button
                    className="sm:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {state.isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Navigation always visible on screens sm and above */}
                <ul className="hidden sm:flex space-x-4">
                    <li>
                        <button className="relative px-8 py-2 rounded-xl bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Home
                        </button>
                    </li>
                    <li>
                        <button className="relative px-8 py-2 rounded-xl bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">About
                        </button>
                    </li>
                    <li>
                        <button className="relative px-8 py-2 rounded-xl bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Contact
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Pop-up menu only for small screens */}
            {state.isMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md">
                    <ul className="flex flex-col items-center py-4">
                        <li className="py-2"><span className="hover:text-gray-300 cursor-pointer">Home</span></li>
                        <li className="py-2"><span className="hover:text-gray-300 cursor-pointer">About</span></li>
                        <li className="py-2"><span className="hover:text-gray-300 cursor-pointer">Services</span></li>
                        <li className="py-2"><span className="hover:text-gray-300 cursor-pointer">Contact</span></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
