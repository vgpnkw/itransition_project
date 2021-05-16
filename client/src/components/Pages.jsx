/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Pagination } from 'react-bootstrap';
import { Context } from '../index';

const Pages = observer(() => {
  const { company } = useContext(Context);
  const pageCount = Math.ceil(company.totalCount / company.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i + 1) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={company.page === page}
          onClick={() => company.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
