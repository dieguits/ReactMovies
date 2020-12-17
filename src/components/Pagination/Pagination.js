import React from 'react';
import Pagination from 'rc-pagination';

import './Pagination.scss';

export default function PaginationMovie(props) {
    const { curretPage, totalItems, onChangePage } = props;

    console.log('PROPS::::::::: ', props);

    return (
        <Pagination
            className="pagination"
            current={curretPage}
            total={totalItems}
            pageSize={20}
            onChange={onChangePage}
        />
    )
}