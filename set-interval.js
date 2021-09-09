console.log('first');
// setInterval(() => {
//     console.log('third');
// }, 3000);

let seconds = 0;

const timeID = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeID);
    }
}, 1000);
console.log('second');