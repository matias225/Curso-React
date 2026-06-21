
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 9540,
        lat: 14.3232,
        lng: 34.4232, 
    }
};

// console.table( { persona } );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );

