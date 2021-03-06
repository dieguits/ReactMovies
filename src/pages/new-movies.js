import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { URL_API, API } from '../utils/constans';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog';
import Pagination from '../components/Pagination';

export default function NewMovies() {

    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    const onChangePage = page => {
        setPage(page);
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API}&language=en-EN&page=${page}`
            );

            const movies = await response.json();
            setMovieList(movies);
        })()
    }, [page]);

    return (
        <Row>
            <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
                    Ultimos Lanzamientos
                </h1>
            </Col>
            {movieList.results ? (
                <Row>
                    <Col span="24">
                        <MovieCatalog movies={movieList} />
                    </Col>
                    <Col span="24">
                        <Pagination curretPage={movieList.page}
                            totalItems={movieList.total_results}
                            onChangePage={onChangePage}
                        />
                    </Col>
                </Row>
            ) : (
                    <Col span="24">
                        <Loading />
                    </Col>
                )}
            {/* <Col span="24">
                <Footer />
            </Col> */}
        </Row>
    );
}