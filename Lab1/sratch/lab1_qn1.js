const rx = require('rxjs');
const rxOps = require('rxjs/operators');

//Question 1: Part one. Using inbuild es6 features
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
const banned1 = ["house", "nice"]

String.prototype.filterwords1 = function (arr) {

    var answer = "";

    this.split(" ").map(x => {

        arr.map(y => {
            if (y == x) {
                x = "***";
            }

        })
        answer = answer + " " + x;
    })

    console.log(answer);

}


//Uncomment to test answer
//"This house is nice".filterwords1(banned1);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Questien 1. Part two. Using Promises
//================================================

const banned2 = ["house", "nice"]


const filter2 = function (ban, word) {

    filt = function (arr, word) {

        var answer = "";

        word.split(" ").map(x => {

            arr.map(y => {
                if (y == x) {
                    x = "***";
                }

            })
            answer = answer + " " + x;
        })

        //console.log(answer);
        return answer;

        //setTimeout(()=>{return answer},5000)

    }
    return new Promise(function (resolve, reject) {
        if (word) {
            resolve(filt(ban, word))
        }
        else {
            reject("Not working")
        }
    })
}

String.prototype.filterWords2 = function (wordsToRemove) {
    filter2(wordsToRemove, this).then(x => console.log(x)).catch(x => console.log(x))
}



//Uncomment to test solution
//"the house is nice".filterWords2(banned2)
//====================================================================================================================


//Questien 1. Part three. Using Async&Wait
//|||||||||||||||||||||||||||||||||||||||||||||||
const banned3 = ["house", "nice"]
async function filter3(banned) {
    try {
        let answer = await filter2(banned, this)
        console.log(answer)
        //console.log("this is working")
    }
    catch{
        console.log("Error")
    }

}

String.prototype.filterWords3 = filter3;


//Uncomment to test solution
//"the house is nice".filterWords3(banned3)
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Questien 1. Part four. Using Observable
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const banned4 = ["house", "nice"]

const words4 = "the house is nice"
String.prototype.filterWords4 = function (ban) {
    rx.from(this.split(" "))
        .pipe(rxOps.map((x) => { if (ban.includes(x)) { return "***" } else { return x } }), rxOps.reduce((x, y) => x + " " + y))
        .subscribe((b) => { console.log(b) }, () => console.log("error"), null)
}

//"the house is nice".filterWords4(banned4)


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx