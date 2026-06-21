
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: number;
  city: string;
}

const human: Person = {
  firstName: 'Matias',
  lastName: 'Romani',
  age: 32,
  address: {
    postalCode: 5600,
    city: 'San Rafael',
  },
};

const human2: Person = {
  firstName: 'Brisa',
  lastName: 'Olate',
  age: 25,
  address: {
    postalCode: 5601,
    city: 'El Cerrito',
  }
}

console.log(human);

// const human2 = { ...human }; solo rompe referencias de primer nivel
// const human2 = structuredClone(human);

// human2.firstName = 'Brisa';
// human2.lastName = 'Olate';
// human2.age = 25;
// human2.address.postalCode = 5601;
// human2.address.city = 'El Cerrito';

console.log(human2);
