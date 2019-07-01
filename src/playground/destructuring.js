//Object destructuring

/*const person = {
    name: 'Eduardo',
    age: 18,
    location: {
        city: 'São Paulo',
        temp: 30
    }
};

const name = person.name;
const age = person.age;
const {city, temp: temperature} = person.location

if (temperature && city) {
    console.log(`It's ${temperature} in ${city}.`);
}

const {name = 'Anonymous', age} = person

console.log(`${name} tem ${age} anos.`);
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holliday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;

if (publisherName) {
    console.log(publisherName);
} */

// Array destructuring

const address = ['Rua Geraldo da Silva 123', 'Salvador', 'Bahia', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , mprice] = item;
console.log(`A medium ${product} costs ${mprice}.`);