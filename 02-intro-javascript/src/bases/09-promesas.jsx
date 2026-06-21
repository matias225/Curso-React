import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // Tarea
//         // importar el 
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No existe el heroe.');
            }
        }, 2000);
    });
} 

getHeroeByIdAsync(10)
    .then( console.log )
    .catch( console.warn );