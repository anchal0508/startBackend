const express = require('express');
const route = express.Router();
let students = [
    {id : 1, name : 'Alice'},
    {id : 2, name : 'Bob'},
    {id : 3, name : 'Charlie'}
];

route.get('/', (req, res)=>{
    const ListStudents = students.map(s => s.name);
    res.send(`List of All Students ${ListStudents}`);

});
route.get('/:id', (req, res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    if(!student) return res.send('Student Not Found');
    res.send(`Student: ${student.name}`);
})

route.post('/', (req, res)=>{
    const {name} = req.body;
    const newStudent = {id: students.length +1, name};
    res.send(`Student Created : ${newStudent} `);
});



module.exports = route;



