//Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.
//Test: formatName('  esther  ', '  ogbu  ') should return 'OGBU, Esther'

function formatName(firstName, lastName){
    let trimmedFirstname =  firstName.trim();
    let trimmedLastname =  lastName.toUpperCase();

    return `${trimmedFirstname}, ${lastName}`
}
console.log(formatName( "olatomide", "aborisade"))