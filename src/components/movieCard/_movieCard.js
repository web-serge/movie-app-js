import {renderImagePoster} from "./imagePoster.js";
import {renderMovieName} from "./movieName.js";
import {renderMovieRating} from "./movieRating.js";
import {renderMovieGenre} from "./movieGenre.js";
import {renderMovieData} from "./movieDate.js";
import {renderMovieDuration} from "./movieDuration.js";
import {renderButton} from "../button/button.js";

export function renderMovieCard(data) {
    const movieCardsContainerElement = document.createElement('div');
    movieCardsContainerElement.classList.add('container');

    data.forEach(item => {
        //add elements
        const movieCard = document.createElement('div'),
            imagePoster = renderImagePoster(item.poster.url),
            movieName = renderMovieName(item.name),
            movieRating = renderMovieRating(item.rating.kp),
            movieGenre = renderMovieGenre(item.genres),
            movieYear = renderMovieData(item.year),
            movieDuration = renderMovieDuration(item.movieLength),
            movieButton = renderButton('a', 'Подробнее');

        //add className
        movieCard.classList.add('card');
        movieButton.classList.add('button__card');

        //append
        movieCard.append(imagePoster, movieName, movieRating, movieGenre, movieYear, movieDuration, movieButton)
        movieCardsContainerElement.append(movieCard)
    });
    return movieCardsContainerElement;
}