import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
           <Link className='text-lg'   to="/">Home</Link>
           <Link className='ml-3 text-lg'  to="/review">Reviews</Link>
           <Link className='ml-3 text-lg' to="/about">About</Link>
           <Link className='ml-3 text-lg' to="/contact">Contact</Link>

        </nav>
    );
};

export default Header;