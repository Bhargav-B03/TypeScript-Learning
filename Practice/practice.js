"use strict";
console.log('Bhargav Here.......');
function add(n1, n2, f1) {
    let num = n1 + n2;
    console.log(num);
    f1(num);
    // console.log(num2);
}
// function print(num: number): void {
//     console.log(num);
// }
add(2, 4, function (num) {
    console.log(num);
});
//# sourceMappingURL=practice.js.map