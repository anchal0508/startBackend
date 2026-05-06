const express = require('express');
const route = express.Router();

let courses = [
    {id : 1, name: " Frontend", Description: "HTML, CSS, JS, React"},
    {id : 2, name: "Backend",  Description: "Node js, spring boot, sql"}
]
route.get('/', (req, res)=>{
    const allStudent = courses.map(C => C.name);
    res.send(`Courses: ${allStudent}`);;
});


route.get('/:id', (req, res)=>{
    const findCourse = courses.find(c=> c.id === parseInt(req.params.id));
    if(!findCourse) return res.send('Course not found');
    res.send(`Course : ${findCourse.name}, Description: ${findCourse.Description}`);
})

route.post('/', (req, res)=>{
    const {name}  =  req.body;
    const newCourse = {id : courses.length +1, name};
    res.send(`New Course Created: ${newCourse}`);
});



module.exports = route;