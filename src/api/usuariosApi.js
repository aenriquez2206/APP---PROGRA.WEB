
let usuarios =[
    {
        id:1,
        img:"",
        nombre: "Ariel Enriquez",
        estado:"Activo"
    }, 
    {
        id:2,
        img:"",
        nombre: "Helmut Saker",
        estado:"Activo"
    },
    {
        id:3,
        img:"",
        nombre: "Rodrigo Thompson",
        estado:"Activo"
    },
    {
        id:4,
        img:"",
        nombre: "Sebastian Valverde",
        estado:"Activo"
    },
    {
        id:5,
        img:"",
        nombre: "Sebastian Diaz",
        estado:"Activo"
    },
    {
        id:6,
        img:"",
        nombre: "Nehemias Falcon",
        estado:"Activo"
    }
]

let contador =6;
const insert =(usuario)=>{
    usuarios.id = ++contador;
    usuarios.push(usuarios)
}

const get =()=>{
    return usuarios;
}


const usuariosApi ={insert,get}
export default usuariosApi