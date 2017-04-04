/**
 * Created by deetpanshumalik on 4/4/17.
 */
var sq = require('./square');

function solveSquare(s) {
    console.log("Solving for square with side " + s);

    if(s < 0) {
        console.log("sqaure's side must be positive, the value input is: " + s);
    }
    else{
        console.log("Perimeter = " + sq.area(s));
        console.log("Area = " + sq.perimeter(s));
    }
}

solveSquare(1);
solveSquare(10);
solveSquare(-1);