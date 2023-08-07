import React, {useState} from 'react'
import './style.css' 

export const Pagination = ({ pagination, currentPage, changePage }) => {

  
  return (
    <div className="pagination">
        {
          pagination.map((page, index) => 
            <div 
              key={index}
              className={`pagination-item${currentPage == page ? ' active' : ''}`}
              onClick={() => changePage(page)}
            >
              {page}
            </div>)
        }
      </div>
  )
}