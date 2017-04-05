/**
 * Created by deetpanshumalik on 4/4/17.
 */

var sq = require('./square-2')

function solveSq(s) {
    console.log("Solving for square with side s = " + s);
    sq(s, function (err, square) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Area of square = " + square.area());
            console.log("Perimeter of square = " + square.perimeter());
        }
    });
};

solveSq(23);
solveSq(-54);
solveSq(9);
