let correctNumber = 8;
let userNumber = 8;
do {
    parseInt(("Enter the correct number"));
    if(userNumber!==correctNumber){
        console.log("Try again");
    }
} while (userNumber!==correctNumber);

console.log("Congratulalations!, You have entered the correct number");