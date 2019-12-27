const person = {
    name: 'Jacob',
    age: 26,
    location: {
        city: 'Larsmo',
        temp: 0
    }
};

const {name: firstName = 'Anonymous', age} = person;
const {city, temp: temperature} = person.location;

console.log(`${firstName} is ${age}.`);

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]} in ${address[2]}.`)

//const [street, city, state, zip] = address;

//console.log(`You are in ${city} in ${state}.`)

//const [, , state] = address;

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [coffee, , price,] = item;

console.log(`A medium ${coffee} costs ${price}.`)