// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")
var problem1 = -11

while (problem1 < 19) {
    problem1++;
    console.log(problem1);
}

// Print all EVEN numbers between 10 and 40
console.log("Print all EVEN numbers between 10 and 40")
var problem2 = 10

while  (problem2 <= 40){
    if (problem2 % 2 == 0){
                console.log(problem2);
    }
        problem2++;
}
/////////////////////////////////////////////////////////////
// Answer is correct but twice less efficient than this loop:
// while (problem2 <=40){
// console.log(problem2);
// problem2+=2;
// }
/////////////////////////////////////////////////////////////
// Print all EVEN numbers between 10 and 40
console.log("Print all ODD numbers between 300 and 333")
var problem3 = 300

while  (problem3 <= 333){
    if (problem3 % 2 !== 0){
                console.log(problem3);
    }
        problem3++;
}

// Print all numbers divisble by 5 AND 3 between 5 and 50
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50")
var problem4 = 5

while  (problem4 <= 50){
    if (problem4 % 5 === 0 && problem4 % 3 === 0){
                console.log(problem4);
    }
        problem4++;
}
