let WinningNumber = 19;
let userguess = +prompt("guess a number");
// console.log(typeof userguess)
// console.log( userguess)


if (WinningNumber === userguess) {
    console.log("you guess number is correct !!")
} else if (0 >= userguess) {
    console.log("guess a number");

} else if (WinningNumber >= userguess) {
    console.log("too low");

} else {
    console.log("too high");
}

