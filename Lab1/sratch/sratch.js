// const numbers = [1, 2, 3, 4]
// const even = [2, 4]
// var word = "";

// numbers.map(
//     (x) => { 
//         even.map(
//             (y) => { }
//         )
//     }
// )

const { of } = require('rxjs');
const { map, filter} = require('rxjs/operators');


of(1, 2, 3).pipe(
    map((n) => n + 3),
    filter((n) => n >= 2)
).subscribe(
    (x) => console.log(x), null, () => console.log('done')
)


