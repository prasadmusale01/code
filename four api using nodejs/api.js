//npm init
//npm install express
//node rest.js

const express=require('express');
const app=express();
const port=8000;

const courses=[
    {id:1,name:'AI'},
    {id:2,name:'ml'},
    {id:3,name:'ds'}
]

app.get('/',(req,res)=>{
    res.write('hello');
    res.end();
})

app.get('/courses',(req,res)=>{
    res.send(courses);
    res.end();
})

app.get('/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    res.send(course)
    res.end();
})

app.get('/home',(req,res)=>{
    res.write('<h1>welcome to my courses</h1>')
    res.end();
})

app.listen(port,()=>{console.log('listening')})