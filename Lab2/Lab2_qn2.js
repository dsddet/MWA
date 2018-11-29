

const wordEven = (x) => {
    const answer = []
    array.forEach(x => { if (x % 2 == 0) { answer.push(x) } })
    return answer
}

const wordOdd = (x) => {
    const answer = []
    array.forEach(x => { if (x % 2 != 0) { answer.push(x) } })
    return answer
}



async function geteven(x) {
    try {
        const response = await new Promise((resolve, reject) => {
            if (x) {
                resolve(
                    wordEven(x))
            }
        })

        console.log(response)
    }
    catch{
        console.log("error")
    }
}

async function getOdd(x) {
    try {
        const response = await new Promise((resolve, reject) => {
            if (x) {
                resolve(
                    wordOdd(x))
            }
        })

        console.log(response)
        return response;
    }
    catch{
        console.log("error")
    }
}

const array = [1, 2, 3, 4, 5, 6, 7]
//geteven(array)

Object.prototype.ev = getOdd().then(x => console.log(x))


array.ev









