const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

let obj = [];

app.get("/" ,(req,res)=>{  
    let { like } = req.body;
    obj.push(like);  
    //console.log(like);
    res.send(obj);
})

app.get("/test",(req,res)=>{
    res.send("this is the back end API");
})

app.listen(3000, ()=>{
    console.log(`The app is listening at 3000`);
})