import './Header.css';
import React, { useState } from 'react';

interface HeaderProps {
    updateMovies: (searchTerm: string) => void;
}

const Header = (props: HeaderProps): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (searchTerm) {
            props.updateMovies(searchTerm);
        }
    }

    return (
        <header>
            <form onSubmit={handleOnSubmit}>
                <input className='search' type="text" placeholder='Search...' value={searchTerm} onChange={handleOnChange} />
            </form>
        </header>
    )
}

export default Header;