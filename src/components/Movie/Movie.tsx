import React from 'react';
import './Movie.css';
import { Movie as IMovie } from '../../interfaces/Movie';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const DEFAULT_IMG = 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';

const Movie = (movie: IMovie) => {

    const { title, poster_path, overview, vote_average } = movie;

    const setVoteClass = (vote: number): string => {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    return (
        <div className='movie'>
            <img src={poster_path ? `${IMG_API}${poster_path}` : DEFAULT_IMG} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;