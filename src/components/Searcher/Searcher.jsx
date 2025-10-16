import './Searcher.css'

const Searcher=({valor,render,placeh})=>{
    return(
        <>
        <div className="searchSection">
                <input className="search" 
                type="text" 
                placeholder={placeh}
                value={valor}
                onChange={(event)=>render(event.target.value)}></input>
                <img  src="/itemsAssets/search.png" alt="img"/>
        </div>
        </>
    )
}


export default Searcher