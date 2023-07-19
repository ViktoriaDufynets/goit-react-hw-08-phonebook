import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Item } from 'components/ContactList/ContactList.styled';
import Contact from 'components/Contact/Contact';
import css from './Pagination.module.css';


function PaginatedItems({ items, itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
        {currentItems.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Contact id={id} name={name} number={number} />
              </Item>
            );
          })}
      <ReactPaginate  className={css.nole}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;