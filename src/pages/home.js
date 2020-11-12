import React from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API } from '../utils/constans';

import SliderMovies from '../components/SliderMovies';

export default function Home() {

    //const movies = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=1d35785bd0d2f399bf19285c0c14b83a&language=en-US&page=1");
    
    const newMovies = useFetch( `${URL_API}/movie/now_playing?api_key=${API}&language=en-US&page=1`);

    console.log(newMovies);

    return (
        <>
            <SliderMovies movies={newMovies} />
        </>
    );
}