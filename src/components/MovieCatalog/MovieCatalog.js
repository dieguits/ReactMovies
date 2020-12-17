import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';

import './MovieCatalog.scss';

export default function MovieCatalog(props) {

    const {
        movies: { results }
    } = props;

    let items = results.map((movie) =>
        <Col key={movie.id} xs={4} className="movie-catalog">
            <MovieCard movie={movie} />
        </Col>
    );

    return (
        <Row>
            {items}
        </Row>
    );
}

function MovieCard(props) {

    const {
        movie: { id, title, poster_path }
    } = props;

    const { Meta } = Card;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

    return (
        <Link to={`/movie/${id}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={title} src={posterPath} />}
                actions={[<EyeOutlined key="eye" />]}  >

                <Meta title={title} />
            </Card>
        </Link>
    );
}