///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0 //Initialize a variable to start counting.
for (let i = 0; i !== 7; ++i) { //Loop through each of the seven days of the week.
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i] //Add the number of acres picked for all varieties that day to the total.
}
console.log(totalAcres) //Now that we've incorporated data from all seven days, print the total.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7 //We know the total number of acres picked and we know it was over the course of seven days, so the average number of acres picked for all varieties per day is the total divided by seven.
console.log(averageDailyAcres) //Print it.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (0 < acresLeft) { //Loop until there are no acres left.
    ++days //Increment the counter, showing that another day will be needed.
    acresLeft -= averageDailyAcres //Decrease the number of acres left by the average number of acres picked per day in the last week, which is our best guess as to how many will be picked on any given day in the future.
}
console.log(days) //Print the counter, showing the number of days that we project will be needed to pick everything.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [] //Initializes an empty array to start calculating the fuji variety's tons per day.
let galaTons = [] //Initializes an empty array to start calculating the gala variety's tons per day.
let pinkTons = [] //Initializes an empty array to start calculating the pink variety's tons per day.
for (let i = 0; i !== 7; ++i) { //Loop through each of the seven days of the week.
    fujiTons[i] = 6.5 * fujiAcres[i] //Calculates the number of tons that day for the fuji variety.
    galaTons[i] = 6.5 * galaAcres[i] //Calculates the number of tons that day for the gala variety.
    pinkTons[i] = 6.5 * pinkAcres[i] //Calculates the number of tons that day for the pink variety.
}
console.log(fujiTons) //Prints the tons for each day for the fuji variety.
console.log(galaTons) //Prints the tons for each day for the gala variety.
console.log(pinkTons) //Prints the tons for each day for the pink variety.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = [] //Initializes an empty array to start calculating the fuji variety's pounds per day.
let galaPounds = [] //Initializes an empty array to start calculating the gala variety's pounds per day.
let pinkPounds = [] //Initializes an empty array to start calculating the pink variety's pounds per day.
for (let i = 0; i !== 7; ++i) { //Loop through each of the seven days of the week.
    fujiPounds[i] = 2000 * fujiTons[i] //Calculates the number of pounds that day for the fuji variety.
    galaPounds[i] = 2000 * galaTons[i] //Calculates the number of pounds that day for the gala variety.
    pinkPounds[i] = 2000 * pinkTons[i] //Calculates the number of pounds that day for the pink variety.
}
console.log(fujiPounds) //Prints the pounds for each day for the fuji variety.
console.log(galaPounds) //Prints the pounds for each day for the gala variety.
console.log(pinkPounds) //Prints the pounds for each day for the pink variety.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0 //Initialize a variable to start counting for the fuji variety.
let galaProfit = 0 //Initialize a variable to start counting for the gala variety.
let pinkProfit = 0 //Initialize a variable to start counting for the pink variety.
for (let i = 0; i !== 7; ++i) { //Loop through each of the seven days of the week.
    fujiProfit += fujiPrice * fujiPounds[i] //Add the value of that day's fuji yield to the fuji total.
    galaProfit += galaPrice * galaPounds[i] //Add the value of that day's gala yield to the gala total.
    pinkProfit += pinkPrice * pinkPounds[i] //Add the value of that day's pink yield to the pink total.
}
console.log(fujiProfit) //Print the total value for the fuji variety.
console.log(galaProfit) //Print the total value for the gala variety.
console.log(pinkProfit) //Print the total value for the pink variety.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit //Calculate the total value over all varieties.
console.log(totalProfit) //Print it.