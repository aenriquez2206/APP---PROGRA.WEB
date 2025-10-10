import { useState,useEffect } from 'react'
import './Pagination.css'


const Pagination = ({items,itemsPerPage, onPageChange}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Cambia página y notifica al padre
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  // Actualiza los ítems visibles en cada cambio de página
 
  
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const sliced = items.slice(start, end)
    onPageChange(sliced);
  }, [currentPage,items]);

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        ‹
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index +1 ;
        return (
          <button
            key={page}
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        ›
      </button>
    </div>
  );
};


export default Pagination