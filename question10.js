//BONUS: Write a function called summarizeStudent that accepts an array of student objects (each with name and score). The function should return a new array of strings in this format:
//'Amara scored 88 — Grade: B'
function summarizeStudent(students){

    function gradeScore(score){
    if (score > 70 && score <= 100){
        return "A";
    }
    else if(score >= 60 && score <= 69){
        return "B";
    } 
    else if(score >= 50 && score <= 59){
        return "C";
    } 
    else if(score >= 40 && score <= 49){
        return "D";
    } 
    else if(score < 40){
        return "F";
    }
    else{
        return "invalid";
    }
}

    return students.map(student => {
        const grade = gradeScore(student.score);
        return `${student.name} scored ${student.score} — Grade: ${grade}`;
    });

}
const studentArray = [
    { name: "Amara", score: 88 },
    { name: "Olatomide", score: 62 },
];

const result = summarizeStudent(studentArray);
console.log(result);
