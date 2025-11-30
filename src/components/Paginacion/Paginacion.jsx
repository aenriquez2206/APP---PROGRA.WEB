import './Paginacion.css'

const Paginacion = ({totalPaginas, paginaActual, setPaginaActual}) => {
    const pages = Array.from({ length: totalPaginas }, (_, i) => i + 1);

    // Devuelve un array con como máximo 3 páginas visibles centradas en la página actual
    const getVisiblePages = () => {
        if (totalPaginas <= 3) return pages;

        // intención: mostrar [current-1, current, current+1], pero respetando límites
        let start = Math.max(1, paginaActual - 1);
        let end = Math.min(totalPaginas, start + 2);

        // si estamos al final y no hay 3 elementos, ajustar start
        if (end - start < 2) {
            start = Math.max(1, end - 2);
        }

        const visible = [];
        for (let p = start; p <= end; p++) visible.push(p);
        return visible;
    }

    const visiblePages = getVisiblePages();

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
                <h3 className = "flecha-izq">{'<'}</h3>
            </button>

            {visiblePages.map(page => (
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
                <h3 className = "flecha-der">{'>'}</h3>
            </button>
        </div>
    );
};

export default Paginacion;
