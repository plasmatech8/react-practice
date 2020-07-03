import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
    console.log(req.body.name);
    console.log(req.body);

});

app.listen(8000, () => console.log('Listening on 8000'));
