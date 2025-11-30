import './CategoriaItem.css'

const CategoriaItem = ({ nombre, img }) => { 
    return (
        <div className="categoria-item">
            <div className="categoria-circulo">
                <img src={img} alt={nombre} className="categoria-img" />
            </div>
            <p className="categoria-nombre">{nombre}</p>
        </div>
    );
};

export default CategoriaItem;