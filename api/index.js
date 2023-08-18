const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(cors);
app.use(bodyParser.json())

const getData = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(data);
    return data;
}
app.get('/', async(req, res)=> {
    res.send(200);
})
app.get('/user', async(req, res)=> {
    console.log("request accepted");
    const data = await getData();
    console.log("data", data.data);
    res.status(200).json({message: "ok",data: data.data})

})


app.listen(3001,()=>{
    console.log("server start...");
})
