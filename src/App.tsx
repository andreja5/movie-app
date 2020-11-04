import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie/Movie';
import Header from './components/Header/Header';
import { Movie as IMovie } from './interfaces/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'

const SEARCH = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(FEATURED_API);
    }, [])

    const getMovies = (API: string): void => {
        if (API) {
            fetch(API)
                .then(res => res.json())
                .then(data => {
                    setMovies(data.results)
                })
        }
    }

    const updateMovies = (searchTerm: string): void => {
        getMovies(SEARCH + searchTerm);
    }

    return (
        <>
            <Header updateMovies={updateMovies} />
            <div className='movie-container'>
                {movies.length > 0 && movies.map((movie: IMovie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </div>
        </>
    )
}

export default App;
