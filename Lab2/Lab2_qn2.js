

const wordEven = (x) => {
    const answer = [];
    array.forEach(x => { if (x % 2 == 0) { answer.push(x) } })
    return answer;
};

const wordOdd = (x) => {
    const answer = [];
    array.forEach(x => { if (x % 2 != 0) { answer.push(x) } })
    return answer;
};



async function sortBy(x, fun) {
    try {
        const response = await new Promise((resolve, reject) => {
            if (x) {
                resolve(
                    fun(x))
            }

        })

        console.log(response);
    }
    catch{
        console.log("error");
    }
};



const array = [1, 2, 3, 4, 5, 6, 7];
//sortBy(array, wordEven)
//sortBy(array, wordOdd)

Array.prototype.even = () => sortBy(this, wordEven);
Array.prototype.odd = () => sortBy(this, wordOdd);

console.log("Start");
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log("End");















