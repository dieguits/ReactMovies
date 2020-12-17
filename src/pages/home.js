import React from 'react';
import { Row, Col } from 'antd';
import useFetch from '../hooks/useFetch';
import { URL_API, API } from '../utils/constans';
import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList';


export default function Home() {

    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);
    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
    const ratesMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);

    //console.log(newMovies);

    return (
        <>
            <SliderMovies movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="Peliculas Populares" movies={popularMovies} />
                </Col>
                <Col span={12}>
                    <MovieList title="Mas Votadas" movies={ratesMovies} />
                </Col>
            </Row>
        </>
    );
}