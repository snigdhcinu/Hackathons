'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write logic in main();


function main() {
// Main logic goes here, use it in any way you see fit, its up to you
    const x = readline();
    var line2 = readline(); 
    let num=readline().split(' ').map(x=>parseInt(x)); // Incase the input line has a space seperated values, then each of them is seperated into diff. array elements, based on ' ' present between each array item.
    /* Or something like this were also possible
        num=parseInt(readline().split(' '));
       Also note that it is inside readline() that the input is accessed, however if due to some arrangement it was already provided to us via function argument, 
       refer to TCS-UI-2020 file on how to handle i/o then.
    */
    
    foo(x);
    foo(line2);
}
function foo(x) {
    process.stdout.write("hello: ");   // without auto '\n' (newline)
    console.log(x);  // with auto '\n' (newline)
}
