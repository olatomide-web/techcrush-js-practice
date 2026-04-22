//Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.
//Test: formatName('  esther  ', '  ogbu  ') should return 'OGBU, Esther'

function formatName(firstName, lastName) {
    
    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    
    const formattedLast = trimmedLast.toUpperCase();
    const formattedFirst = trimmedFirst.charAt(0).toUpperCase() + trimmedFirst.slice(1).toLowerCase();
    
    return `${formattedLast}, ${formattedFirst}`;
}
console.log(formatName("  olatomide  ", "  ABORISADE  "));    

