import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


// App
const app = express();
app.use(bodyParser.json());

// Hello routes
app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

// Add upvotes
app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes += 1;
  res.status(200).send(`${articleName} now has ` +
                       `${articlesInfo[articleName].upvotes} upvotes!`)
});

// Add comment
app.post('/api/articles/:name/add-comment', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName])
});

// Obtain upvotes and comments for a article
app.get('/api/articles/:name', async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect(
      "mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('my-blog');
    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Database Error", error});
  }
});

// Listen
app.listen(8000, () => console.log('Listening on 8000'));
