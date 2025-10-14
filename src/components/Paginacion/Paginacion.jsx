import './Paginacion.css'

const Paginacion = ({totalPaginas, paginaActual, setPaginaActual}) => {
    const pages = Array.from({ length: totalPaginas }, (_, i) => i + 1);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPaginas) {
            setPaginaActual(page);
        }
    };

    return (
        <div className="paginacion-container">
            <button
                className="paginacion-flecha"
                onClick={() => handlePageChange(paginaActual - 1)}
                disabled={paginaActual===1}
            >
                
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`paginacion-item${page===paginaActual ? 'actual' : ''}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="paginacion-flecha"
                onClick={() => handlePageChange(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
            >
            </button>
        </div>
    );
};

export default Paginacion;
