import express from 'express'
import cors from 'cors'

const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message:'bookdb api is runing'
    })
});

app.get('/record',(req,res)=>{
    res.json({
        message:'bookdb api is runing',
        author:'james clear',
        book:"atomic habits"
    })
});

export default app;