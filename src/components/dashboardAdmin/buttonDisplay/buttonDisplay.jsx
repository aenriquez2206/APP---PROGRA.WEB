import "./buttonDisplay.css" 

const ButtonDisplay =(props)=>{
    return(
        <>
            <section className="buttonDisplay">
                <div className="nombreSection" >{props.titulo}</div>
                <div >{props.valor}</div>
            </section>
        </>

    )
}

export default  ButtonDisplay