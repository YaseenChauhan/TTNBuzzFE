import React from 'react';
import './Pagination.css';
import { NavLink } from 'react-router-dom';

const pagination = (props) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalBuzzs / props.buzzPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return <li key={number} className="page-item">
                        <NavLink 
                            to="#"
                            onClick={() => props.paginate(number)} 
                            className='page-link'
                            activeClassName="selected-nav">
                            {number}
                        </NavLink>
                    </li>
                })}

            </ul>
        </nav>
    )
}
export default pagination;

// {/* <li className="page-item">
//                     <a className="page-link" href="#" aria-label="Next">
//                         <span aria-hidden="true">&raquo;</span>
//                         <span className="sr-only">Next</span>
//                     </a>
//                 </li> */}