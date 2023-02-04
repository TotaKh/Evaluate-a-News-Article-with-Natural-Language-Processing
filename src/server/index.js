const port = '8081'
const API_KEY='46582dfbc8679cb3e0beb6e52c6fe42d'
const API_ID='https://api.meaningcloud.com/sentiment-2.1'

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))


app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})
//process.env.
app.post('/check', async (req, res)=>{
    const url = req.body.url;
    const responce = await fetch(`${API_ID}?key=${API_KEY}&url=${url}&leng=en`)
    try{
        const data = await responce.json();
        const temp = {
            text: data.sentence_list[0].text,
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony
        }
        res.status(200).json(temp).end;
    }
    catch(error){
        console.log(error);
        res.status(400).end;
    }
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
