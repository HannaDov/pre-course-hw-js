// code

let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passportMarriedCopy = {
    name: passportMarried.name,
    surname: passportMarried.surname,
    married:true,
    address: {...passportMarried.address

    }
};


console.log(passportMarried)
console.log(passportMarriedCopy)
