import express from 'express';
import bodyParser from 'body-parser';


const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    }
}

// App
const app = express();
app.use(bodyParser.json());

// Hello routes
app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

// Number of upvotes
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;
    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ` +
                         `${articlesInfo[articleName].upvotes} upvotes!`)
})

// Listen
app.listen(8000, () => console.log('Listening on 8000'));
