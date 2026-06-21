
// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    //console.log(edad, nombre, rango);
    return {
        nombreClave: clave,
        anios: edad 
    }
}

const {nombreClave, anios} = useContext(persona);
console.log(nombreClave, anios);
