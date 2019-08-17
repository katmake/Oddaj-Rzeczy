import React from "react";
import classNames from "classnames";
import "./Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              className={classNames({
                active: currentPage === number
              })}
              onClick={() => paginate(number)}
              href="#foundationList"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
