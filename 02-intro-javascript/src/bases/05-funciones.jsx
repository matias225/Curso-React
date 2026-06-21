
// Funciones en JS
const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

// console.log( saludar('Goku') );
console.log( saludar );
console.log( saludar2('Vegueta') );
console.log( saludar3('Goku') );


const getUser = () => ({
    uid: 'abc123',
    username: 'El_papi22'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a =>
// 2. Retornar un objeto implicito
// 3. Pruebas


const getActiveUser = ( nombre ) => 
    ({
        uid: 'abc567',
        username: nombre
    })


const activeUser = getActiveUser('Brisa');
console.log(activeUser);
