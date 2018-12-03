const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const jsonparser = express.json();



const app = express();
app.listen('3000');

app.use(morgan('dev'));
app.use(cors());

function removeById(id) {
    let answer = [];
    this.forEach(element => {
        if (!(Number.parseInt(id) == element.id)) {
            answer.push(element);
        } 
    });

    return answer;
}
Array.prototype.removeById = removeById;

let grades = [{ id: 1, name: "Asaad Saad", course: "CS572", grade: 95 },
    { id: 2, name: "Asaad Saad", course: "CS572", grade: 95 },
    { id: 3, name: "Asaad Saad", course: "CS572", grade: 95 },
    { id: 4, name: "Asaad Saad", course: "CS572", grade: 95 },
    { id: 5, name: "Asaad Saad", course: "CS572", grade: 95 }];

app.get('/api/grades', (req, res) => {
    res.json(grades);
});

app.post('/api/grades', jsonparser,(req, res) => {
    grades.push(req.body);
    res.json(grades);
});

app.put('/api/grades/:id', jsonparser, (req, res) => {
    let ids = (() => { let arr = []; grades.forEach((element) => arr.push(element.id)); return arr; })();
    res.set('Content-Type', 'appication/json')

    if (ids.includes(Number.parseInt(req.params.id))) {
        grades = grades.removeById(req.params.id);
        grades.push(req.body);
    }

    res.json(grades);

});

app.delete('/api/grades/:id', (req, res) => {
    res.set('Content-Type', 'appication/json')
    grades = grades.removeById(req.params.id)
    res.json(grades);
});


