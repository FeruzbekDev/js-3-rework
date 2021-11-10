var a = +prompt(' Enter the first number'); //1//
var b = +prompt(' Enter the second number'); //2//
var c = +prompt(' Enter the third number'); //3//
alert( 'Finish')

// if (a > b && b > c || a < b && b < c) {
//     console.log(' middle number is ' + b);
// }

// else if (b > a && a > c || b < a && a < c) {
//     console.log(' middle number is ' + a);

// } 
  
// else if (a > c && c > b || a < c && c < b) {
//     console.log(' middle number is ' + c);
// } else  {
//     console.log(a || b || c);
//     console.log('Something get wrong');
// }
if (a > b > c || a < b < c){
    console.log(' middle number is ' + b);
} else if (b > a > c || b < a < c  ){
    console.log(' middle number is ' + a);
}
else if (a > c > b || a < c < b ){
    console.log(' middle number is ' + c );
} else  {
        //  console.log(a || b || c);
         console.log('Something get wrong');
     }


