// code

let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarried2 = Object.assign({}, passportMarried); // создание глубокой копии объекта
passportMarried2.married = true;


console.log(passportMarried)
console.log(passportMarried2)
