import './Searcher.css'



const Searcher=({valor,render})=>{
    return(
        <>
        <div className="searchSection">
                <input className="search" 
                type="text" 
                placeholder="Buscar un producto"
                value={valor}
                onChange={(event)=>render(event.target.value)}></input>
                <img  src="/itemsAssets/search.png" alt="img"/>
        </div>
        </>
    )
}


export default Searcher