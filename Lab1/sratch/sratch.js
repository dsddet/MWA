const arr = [function print1() {
    console.log("one")
},
function print2() {
    console.log("two")
},
function print3() {
    console.log("three")
}]

arr.forEach(x => { x() })