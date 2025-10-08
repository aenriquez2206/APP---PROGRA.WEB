import './Pagination.css'

const Pagination =({lista})=>{
    const listaSize = lista.length;
    let paginas = listaSize/10;
    const calcularPaginas=()=>{
        if(paginas <1){
            paginas = 1;
        }
    }



    return(
        <>
        <div>
            <button> A</button>
            <button> S</button>
        </div>
            
        
        
        </>
    )
}

export default Pagination