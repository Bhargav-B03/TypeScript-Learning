console.log('Bhargav Here.......');

function add(n1: number, n2: number, f1: (num: number) => void) {
    let number = n1 + n2;
    console.log(number);
    f1(number);
    // console.log(num2);
}

// function print(num: number): void {
//     console.log(num);
// }

add(2, 4, function (num) {
    console.log(num);
});