import "./buttonDisplay.css" 

const ButtonDisplay =(props)=>{
    return(
        <>
            <section class="buttonDisplay">
                <div class="nombreSection" >{props.titulo}</div>
                <div >{props.valor}</div>
            </section>
        </>

    )
}

export default  ButtonDisplay