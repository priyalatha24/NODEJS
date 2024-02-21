const express=require('express')
const bodyParser=require('body-parser')

const data=require('./data')

const app=express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/add',(req,res)=>{
    const{id,name,author,pages,prices}=req.body

    data[id]={
        id,name,author,pages,prices
    }
    res.json(data[id])
})

app.get('/api/:bookid',(req,res)=>{
    const id =req.params.bookid
    res.json(data[id])
})

app.put('/api/update/:bookid',(req,res)=>{
    const id=req.params.bookid

    const {name,author,pages,prices}=req.body

    data[id]={id,name,author,pages,prices}
    res.json(data[id])
})

app.delete('/api/delete/:bookid',(req,res)=>{
    const id=req.params.bookid

    delete data[id]
    res.json(data[id])
})

app.listen(3000,()=>{
    console.log("App started at port 3000")
});