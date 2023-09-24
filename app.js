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

    if (userName == undefined || age == undefined || userName == null || age == null){
        console.log("Please enter a name and age.");
        return;
        
    }

    if (age < 16){
        console.log(belowSixteen)
    }else {
        console.log(aboveSixteen);
    }
}
checkAge("Timothy", 14);
checkAge();


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant (x , y){
    if (x == undefined || y == undefined || x == null || y == null){
        console.log("Please enter x and y coordinates.");
        return;
        
    }
    
    if (x > 0 && y > 0){
        console.log(`The coordinates (${x} , ${y}) are in Quadrant 1.`);
    }

    if (x < 0 && y > 0){
        console.log(`The coordinates (${x} , ${y}) are in Quadrant 2.`);
    }

    if (x < 0 && y < 0){
        console.log(`The coordinates (${x} , ${y}) are in Quadrant 3.`);
    }

    if (x > 0 && y < 0){
        console.log(`The coordinates (${x} , ${y}) are in Quadrant 4.`);
    }


}
whichQuadrant();
whichQuadrant(4,-6);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isATriangle (x , y, z){
    if (x == undefined || y == undefined || x == null || y == null){
        console.log("Please enter 3 lengths.");
        return;
        
    }

    if (x + y > z && y + z > x && z + x > y) {
        if (x == y && y == z){
            console.log("Equilateral Triangle")
        } else if (x != y && y != z && z != x) {
            console.log("Scalene Triangle")
        } else {
            console.log("Isosceles Triangle")
        }
    } else {
        console.log("Invalid Triangle")
    }
}
isATriangle();
isATriangle(2, 2, 3);



// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage (planLimit, day, usage){
    let averageDailyUsage = (usage / day).toFixed(2);
    let allowedDailyUsage = planLimit / 30;
    let exceedingUsage = false;
    let daysRemaining = 30 - day;
    let estimatedDataUse = (averageDailyUsage * 30).toFixed(2);
    let planLimitVsEstimatedUse = Math.abs((planLimit - estimatedDataUse).toFixed(2));
    let roundedAllowedDailyUsage = allowedDailyUsage.toFixed(2);

    console.log("Hello! Thanks for inquiring about your data usage. Below are the details:");
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUsage} GB/day`);

    if (averageDailyUsage <= allowedDailyUsage){
        console.log("If you continue at or below your current usage, you will not exceed your plan limit.");
        return;
    } else {
        exceedingUsage = true;
    }

    if (exceedingUsage == true) {
        console.log(`You are EXCEEDING your plan limit based on your average daily usage. You will exceed your plan by ${planLimitVsEstimatedUse} GB. To ensure you stay at or below your plan limit, use no more than ${roundedAllowedDailyUsage} GB/day.`);
    }
}

dataUsage(200,20,229);