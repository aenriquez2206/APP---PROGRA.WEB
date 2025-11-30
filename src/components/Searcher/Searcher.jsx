import './Searcher.css'

const Searcher = ({ value, onChange, placeh }) => {
    return (
        <div className="searchSection">
            <input 
                className="search" 
                type="text" 
                placeholder={placeh}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <img src="/itemsAssets/search.png" alt="img"/>
        </div>
    );
}

export default Searcher;
