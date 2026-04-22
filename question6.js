//Create an object called myProfile with at least 4 properties: name, age, country, and hobby. Then write a function displayProfile(person) that logs a sentence describing the person using their properties.

const myProfile = {
    name : "Aborisade Olatomide",
    age : 24,
    country : "Nigeria",
    Hobby : "sleeping",
}

function displayProfile(person){
    return (`Hello, my name is ${person.name}, i am ${person.age} years old, living in ${person.country} and i love ${person.Hobby}`)
}
console.log(displayProfile(myProfile))
