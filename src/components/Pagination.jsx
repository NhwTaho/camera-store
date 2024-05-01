import React from 'react';
import '../assets/css/pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav"> 
      <ul className="pagination-list"> 
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item"> {/* Sử dụng class từ file CSS */}
            <a href="#" onClick={() => paginate(number)} className="pagination-link" >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
