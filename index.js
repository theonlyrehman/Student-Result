#! /usr/bin/env node
import inquirer from "inquirer";
let marks = await inquirer.prompt([
    {
        name: "result",
        type: "number",
        message: "Enter Your Marks"
    }
]);
let grade;
if (marks.result >= 85 && marks.result <= 100) {
    grade = "A1";
}
else if (marks.result >= 70 && marks.result <= 84) {
    grade = "A";
}
else if (marks.result >= 60 && marks.result <= 69) {
    grade = "B";
}
else if (marks.result >= 50 && marks.result <= 59) {
    grade = "C";
}
else if (marks.result >= 39 && marks.result <= 49) {
    grade = "D";
}
else if (marks.result >= 34 && marks.result <= 38) {
    grade = "E";
}
else if (marks.result >= 0 && marks.result <= 33) {
    grade = "F";
}
;
console.log("According to your marks, your grade was: ", grade);
