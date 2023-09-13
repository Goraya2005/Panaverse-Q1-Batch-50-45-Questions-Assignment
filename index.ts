
// # Getting Started Exercises with TypeScript and Node.js

// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
// You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo. 

// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

// Answer :  Since Installed

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let friendName: string = "Eric";
console.log(`Hello ${friendName}, would you like to learn some Python today?`);

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let nameOfPerson: string = "Naeem Goraya";

console.log(`Name in upper case is `, nameOfPerson.toUpperCase()); // Print name in upper case

console.log(`Name in upper case is `, nameOfPerson.toLowerCase());  // Print name in Lower case

let titleCaseName = nameOfPerson.toLowerCase().replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());

console.log(`Name in title case is `, titleCaseName);                     // Print name in title case


// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let famousQuote: string = `Qaid-e-Azam said, "Unity, Faith and Discipline."`;

console.log(famousQuote);

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = `Qaid-e-Azam Muhammad Ali Jinnah`
let message: string = `"Unity, Faith and Discipline."`

console.log(`${famous_person} said, ${message}`)

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhitespace: string = "\t\n   Naeem Goraya   \n\t";

// Print the name with leading and trailing whitespace
console.log("Name with Whitespace is = ", nameWithWhitespace);

// Remove leading and trailing whitespace and print the stripped name
let strippedName: string = nameWithWhitespace.trim();
console.log("Stripped Name:", strippedName);

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 

console.log(`The addition of two numbers that makes 8 is 4 + 4 = `, 4 + 4);
console.log(`The subtraction of two numbers that makes 8 is 12 - 4 = `, 12 - 4);
console.log(`The multiplication of two numbers that makes 8 is 4 * 2 = `, 4 * 2);
console.log(`The division of two numbers that makes 8 is 32 / 4 = `, 32 / 4);

// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log("_____________________________________________");
console.log(5 + 3);
console.log("_____________________________________________");

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let myFavoriteNumber: number = 87;
console.log(`Note that my favorite number is ${myFavoriteNumber}`);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

// This program is for addition of two numbers that makes 8. Name: Naeem Goraya 

console.log(`The addition of two numbers that makes 8 is 4 + 4 = `, 4 + 4); 

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendsNames: string[] = ["Shahid", "Mazhar", "Rashid"];
for (let i=0; i<friendsNames.length; i++){
    
    console.log(friendsNames[i]);
}

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friendsList: string[] = ["Shahid", "Mazhar", "Rashid"];
for (let i=0; i<friendsNames.length; i++){
    
    console.log(`Hi! ${friendsList[i]}, Happy to see you`);
}

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let modeOfTransport: string[] = ["Motorcycle", "Car", "Train"];
    console.log(`Mein taan Honda di ${modeOfTransport[0]} ee laysan`);
    console.log(`Enjoy driving Honda ${modeOfTransport[1]} `);
    console.log(`Love to travel by ${modeOfTransport[2]} `);

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Umair", "Saif", "Irshad"];
for (let i=0; i<guestList.length; i++ ){
    console.log(`Dear ${guestList[i]}, You are cordially invited to dinner, tonight.`);
}

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.



let personCannotMakeIt: string = "Saif";
console.log(`Mr. ${personCannotMakeIt}, cann't make it.`);

guestList.splice(1, 1, "Mehmood");
for (let i=0; i<guestList.length; i++ ){
    console.log(`Dear ${guestList[i]}, You are cordially invited to dinner, tonight.`);
}

// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

console.log(`It is to inform you that I found a bigger table` );

//  add three guests

let addGuest:string[] = ["Saleem", "Nasir", "Sherazi"]

// add 1 guest at beginning of array
guestList.unshift(addGuest[0]);

// add one guest at middle of Array

guestList.splice(Math.floor(guestList.length / 2), 0, addGuest[1]);

guestList.push(addGuest[2]);

for (let i=0; i<guestList.length; i++ ){
    console.log(`Dear ${guestList[i]}, You are cordially invited to dinner, tonight.`);
}

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(`Dear All! We can invite only two people for dinner.`);

console.log(`The Guest Lis : `, guestList);

guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

for (let i=0; i<guestList.length; i++ ){
    console.log(`Dear ${guestList[i]}, You are still in the list. `);
}
guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

guestList.pop();
console.log(`The updated Guest Lis : `, guestList);

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placedToVisit: string[] = ["Virgin Islands", "Maldeves", "Nanga Parbat", "Mohin Jo Daro", "Kashmir"];
console.log(placedToVisit);

placedToVisit.sort();
console.log(placedToVisit);

placedToVisit.reverse();
console.log(placedToVisit);

placedToVisit.reverse();
console.log(placedToVisit);


// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`Hi Everyone! This is to inform you that we are inviting ${guestList.length} number of guests to dinner `)


// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let cities: string[] = ["Faisalabad", "Karachi", "Islamabad", "Lahore", "Sahiwal"];
for (let nameOfCity of cities) {
    console.log(" - ", nameOfCity);
}

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Create an array of student records

let students: { name: string; age: number; grade: string }[] = [
    {
      name: "Almas",
      age: 55,
      grade: "10th",
    },
    {
      name: "Ashfaq",
      age: 56,
      grade: "11th",
    },
    {
      name: "Sadaf",
      age: 54,
      grade: "10th",
    },
  ];
  
  // Print information about each student
  console.log("List of Students at Divisional Public School, Faisalabad:");
  for (const student of students) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grade: ${student.grade}`);
    console.log("-----");
  }

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let numbers: number[] = [10, 20, 30, 40, 50];

let errorNumber = numbers[7]; // This will cause an error

console.log(errorNumber); // We won't see this message

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let myAge = 55;
let yourAge = 25;

console.log("Is myAge equal to yourAge? I predict False.");
console.log(myAge == yourAge);

console.log("Is myAge not equal to yourAge? I predict True.");
console.log(myAge != yourAge);

console.log("Is myAge greater than yourAge? I predict True.");
console.log(myAge > yourAge); 

console.log("Is myAge less than yourAge? I predict False.");
console.log(myAge < yourAge); 

console.log("Is myAge greater than or equal to yourAge? I predict True.");
console.log(myAge >= yourAge);

console.log("Is myAge less than or equal to yourAge? I predict False.");
console.log(myAge <= yourAge);

let isSunny = true;
let isWeekend = false;

console.log("Is it sunny and a weekend? I predict False.");
console.log(isSunny && isWeekend); 

console.log("Is it sunny or a weekend? I predict True.");
console.log(isSunny || isWeekend);

console.log("Is it not sunny? I predict False.");
console.log(!isSunny);

console.log("Is it not a weekend? I predict True.");
console.log(!isWeekend); 

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let string1 = "apple";
let string2 = "banana";

console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);

console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2);

let name1 = "Naeem";
let name2 = "Goraya";

console.log("Are name1 and name2 equal ignoring case? I predict True.");
console.log(name1.toLowerCase() == name2.toLowerCase());

// • Tests using the lower case function

console.log("Are name1 and name2 not equal ignoring case? I predict False.");
console.log(name1.toLowerCase() != name2.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let valueNumber1: number = 55;
let valueNumber2: number = 25;

console.log("Are valueNumber1 and valueNumber2 equal ? I predict False.");
console.log(valueNumber1 == valueNumber2);

console.log("Are valueNumber1 and valueNumber2 not equal ? I predict True.");
console.log("This is - ", valueNumber1 != valueNumber2,  "- that valueNumber1 and valueNumber2 are not equal",);

console.log("Are valueNumber1 is less than valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 < valueNumber2,  "- that valueNumber1 is less than valueNumber2",);

console.log("Are valueNumber1 is greater than valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 > valueNumber2,  "- that valueNumber1 is  greater than  valueNumber2",);

console.log("Are valueNumber1 is greater than or equal to valueNumber2  ? I predict True.");
console.log("This is - ", valueNumber1 >= valueNumber2,  "- that valueNumber1 is  greater than or equal to valueNumber2",);

console.log("Are valueNumber1 is less than  or equal to valueNumber2  ? I predict False.");
console.log("This is - ", valueNumber1 <= valueNumber2,  "- that valueNumber1 is  less than  or equal to valueNumber2",);

// • Tests using "and" and "or" operators

let personAge: number = 55;
let personCity: string = "Faisalabad";
let personCity2: string = "Karachi";

if (personAge > 18 && personCity == "Faisalabad"){
    console.log(`You are a gentle person`);
}
else{
    console.log(`You should be kept under observation`);
};

if (personCity == "Faisalabad" || personCity2 == "Karachi"){
    console.log("It is equally GOOD")
}
else{
    console.log("Try to choose a better place of li")
}
// • Test whether an item is in a array
// • Test whether an item is not in a array

let citiesOfPakistan: string[] = ["Karachi", "Islamabad", "Faisalabad", "Lahore"]
let theCity: string = "Faisalabad"
if (citiesOfPakistan.includes(theCity)){
    console.log(`Your city ${theCity} includes in Pakistan`)
}   
let theCity2: string = "Tokyo"
if (citiesOfPakistan.includes(theCity2)){
    console.log(`Your city ${theCity} includes in Pakistan`)
}
else{
    console.log(`Your city ${theCity2} does not includes in Pakistan`)
}   

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let player1: string = "Naaaeem Goraya"
let alienColor: string = 'green';

if (alienColor === 'green') {
  console.log(`Mr. ${player1} just earned 5 points.`);
}

let alienColor2: string = 'red';

//  Version 2

if (alienColor2 === 'green') {
  console.log(`Mr. ${player1} just earned 5 points.`);
}

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

let alienColor3 = 'yellow'
if (alienColor3 === 'green') {
    console.log(`Mr. ${player1} just earned 5 points.`);
  }
  else {
    console.log(`Mr. ${player1} just earned 10 points.`);
  }
  
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// let player1: string = "Naaaeem Goraya"
// let alienColor: string = 'green';
// let alienColor2: string = 'red';
// let alienColor3: string = 'yellow';

// Version 1
if (alienColor === 'green') {
  console.log(`Mr. ${player1} has earned 5 points for shooting the green alien.`);
} 
else if (alienColor === 'yellow') {
  console.log(`Mr. ${player1} has  earned 10 points for shooting the yellow alien.`);
} 
else if (alienColor === 'red') {
  console.log(`Mr. ${player1} has earned 15 points for shooting the red alien.`);
}
// Version 2
if (alienColor2 === 'green') {
    console.log(`Mr. ${player1} has earned 5 points for shooting the green alien.`);
  } 
  else if (alienColor2 === 'yellow') {
    console.log(`Mr. ${player1} has  earned 10 points for shooting the yellow alien.`);
  } 
  else if (alienColor2 === 'red') {
    console.log(`Mr. ${player1} has earned 15 points for shooting the red alien.`);
  }
  // Version 3
if (alienColor3 === 'green') {
    console.log(`Mr. ${player1} has earned 5 points for shooting the green alien.`);
  } 
  else if (alienColor3 === 'yellow') {
    console.log(`Mr. ${player1} has  earned 10 points for shooting the yellow alien.`);
  } 
  else if (alienColor3 === 'red') {
    console.log(`Mr. ${player1} has earned 15 points for shooting the red alien.`);
  }

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let ageOfPerson: number = 55;

if (ageOfPerson < 2 ){
    console.log(`The person is a baby`)
}
if (ageOfPerson >= 2 && ageOfPerson < 4 ){
    console.log(`The person is a toddler`)
}
if (ageOfPerson >= 4 && ageOfPerson < 13 ){
    console.log(`The person is a kid`)
}
if (ageOfPerson >= 13 && ageOfPerson < 20 ){
    console.log(`The person is a teenager`)
}
if (ageOfPerson >= 20 && ageOfPerson < 65 ){
    console.log(`The person is an adult`)
}
if (ageOfPerson > 65 ){
    console.log(`The person is elder`)
}

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["Banana", "Apple", "Grapes"]
if (favorite_fruits.includes("Banana")){
    console.log(`Hi Dear! You Really Like Bananas`)
}
if (favorite_fruits.includes("Apple")){
    console.log(`Hi Dear! You Really Like Apples`)
}
if (favorite_fruits.includes("Grapes")){
    console.log(`Hi Dear! You Really Like Grapes`)
}
if (favorite_fruits.includes("Orange")){
    console.log(`Hi Dear! You Really Like Orange`)
}
else {
    console.log(`Hi Dear! Orange is not one of your favorite fruits`)
}
if (favorite_fruits.includes("Strawberry")){
    console.log(`Hi Dear! You Really Like Strawberry`)
}
else {
    console.log(`Hi Dear! Strawberry is not one of your favorite fruits`)
}
    
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames: string[] = ["Admin", "Eric", "John"];
for (let i=0; i<userNames.length; i++ ){
    if (userNames[i] === "Admin"){
        console.log(`Hello admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let userNames: string[] = ["Admin", "Eric", "John"];
userNames.splice(0, 3);
console.log(userNames);
if (userNames = []){
    console.log(`We need to find some users`)
}

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Athar", "Sherazi", "Ashfaq", "Saeed", "Haider"];
let new_users: string[] = ["Khalil", "Sherazi", "Murad", "Saeed", "Salman"];

for (let i=0; i<new_users.length; i++){
    let isNameTaken = current_users.some(
        (current_users) => current_users.toLowerCase() === new_users[i].toLowerCase()
        );
        if (isNameTaken){
            console.log(`The Name "${new_users[i]}" has already been used. You will need to enter a new username.`);
        }
        else {
            console.log(`The Name "${new_users[i]}" is available.`);
        }
}

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<ordinalNumbers.length; i++){
    if (ordinalNumbers[i] = 1){
        console.log(`"1st"`);
    }
    if (ordinalNumbers[i] = 2){
        console.log(`"2nd"`);
    }
    if (ordinalNumbers[i] = 3){
        console.log(`"3rd"`);
    }
    if (ordinalNumbers[i] = 4){
        console.log(`"4th"`);
    }
    if (ordinalNumbers[i] = 5){
        console.log(`"5th"`);
    }
    if (ordinalNumbers[i] = 6){
        console.log(`"6th"`);
    }
    if (ordinalNumbers[i] = 7){
        console.log(`"7th"`);
    }
    if (ordinalNumbers[i] = 8){
        console.log(`"8th"`);
    }
    if (ordinalNumbers[i] = 9){
        console.log(`"9th"`);
    }
    }

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let myFavoritePizza: string[] = [ "Peri Peri", "Hot Tandoori", "Cheese Lovers"];
for (let pizza of myFavoritePizza){
console.log(pizza);
};
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza of myFavoritePizza){
console.log(`I like`, pizza, `pizza`);
};

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

console.log(`I really like pizza. \n
It is very tasty. \n
I also recommend it for you`)

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Lion", "Tiger", "Cat"];
for (let animal of animals){
    console.log(animal)
};
for (let animal of animals){
    console.log(animal, `would make a great pet.`)
};

console.log(`Any of these animals would make a great pet!`)

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message:string ){
    console.log(`We are making "${size}" size shirts with the  message "${message}"`)
}
make_shirt("Medium", "Pakistan Zindabad");

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

make_shirt("Small", "I love TypeScript.");
make_shirt("Medium", "The Coders.");
make_shirt("Large", "Naeem Goraya Web Developers.");

// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of whichis not in the
// default country.

function describe_city(city: string, country: string){
console.log(`${city} is in ${country = "Pakistan"}`)
}
describe_city("Karachi", "Pakistan" )
describe_city("Faisalabad", "Pakistan" )
describe_city("Kabul", "Afghanistan" )

// 39. City Names: Write a  function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string, country: string) {
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi", "Pakistan")
city_country("Faisalabad", "Pakistan")
city_country("Lahore", "Pakistan")

// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string){
    let newAlbum = {
        name_Of_Artist: artist_name,
        title_Of_Album: album_title
    }
    return newAlbum
}
let album1 = make_album("Naeem", "Over the world");
let album2 = make_album("Goraya", "The Blue World");
let album3 = make_album("Naeem Goraya", "I will see you in heaven");

console.log(album1);
console.log(album2);
console.log(album3);

// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }  
  let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  show_magicians(magicianNames);
  console.log(show_magicians);
 
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
  
    for (let magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }  
    return greatMagicians;
  }
    let magicianNames2: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  let greatMagicians = make_great(magicianNames2);
    show_magicians(greatMagicians);
    console.log(show_magicians);

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the origina names and one array with the Great added to each magician’s name.
  let originalMagicianNames: string[] = [...magicianNames];
  
  // Call make_great with the copy and store the result in a new array
  let greatMagicians2 = make_great(originalMagicianNames);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicianNames);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians);
  
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function yourSandwich(...items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
  }
  
  // Call the function three times with different numbers of arguments
  yourSandwich("Ham", "Cheese", "Lettuce");
  yourSandwich("Turkey", "Tomato");
  yourSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
  
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function cars_info(manufacturer: string, model: number){
    let cars = {
        manufacturer,
        model,
    }
return cars
}
let car1 = cars_info("Mitsubishi Lancer", 1912);
console.log(car1)

function carsInfo(manufacturer: string, model: number) {
    let car = {
      manufacturer,
      model,
    };
    return car;
  }
  
  const carData = cars_info("Titanic", 1914);
  console.log(carData);
  


