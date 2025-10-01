const firstName = 'Fernando';
const lastName = "O'Neal";

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const useState = (value:string) =>{
    return [
        value,
        (newValue: string) => {        
        console.log(newValue);
        },
    ] as const
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');


export const getHeroesByOwner = (owner: Owner) => {

}