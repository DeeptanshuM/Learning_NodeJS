/**
 * Created by deetpanshumalik on 4/4/17.
 */
var argv = require('yargs')
    .usage('Usage: node $0 --s=[num]')
    .demand(['s'])
    .argv;

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

solveSq(argv.s)