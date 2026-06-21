
const characterNames = ['Ran', 'Conan', 'Heiji'];

const [ , , c3 ] = characterNames;

console.log({c3});

const retunrsArrayFn = () => {
    return ['ABC', 123] as const;
};

const [ letters, numbers ] = retunrsArrayFn();

console.log(letters, numbers);

// Tarea:

const useState = (value: string) => {
    return [value, (name: string) => {
        console.log(name);
    }] as const; 
} 

const [name, setName] = useState('Goku');
console.log(name);
setName('Matias');
