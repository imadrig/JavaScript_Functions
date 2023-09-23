console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function isOdd(count){
    if (count < 0) {
        console.log("Please enter a positive integer.")
    }

    for (let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log(i);
        }else {
            continue;
        }
    }

        
}
isOdd(37);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (userName == null || age == null){
        console.log("Please enter a name and age.");
    }

    if (age < 16){
        console.log(belowSixteen)
    }else {
        console.log(aboveSixteen);
    }
}
checkAge("Timothy", 14);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
