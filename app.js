const express = require('express');
const app = express();
const coursesRoute = require('./routes/courses');
const studentsRoute = require('./routes/students');
const homeRoute = require('./routes/home');

app.use(express.json());

app.use('/', homeRoute);
app.use('/courses', coursesRoute);
app.use('/students', studentsRoute);

app.use('/*any', (req, res)=>{
    res.status(404).send('Page not found');
})

app.listen(3000, ()=> console.log('Online ...'));