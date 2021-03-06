import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

// Helper functions
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(
      "mongodb://localhost:27017",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db('my-blog');
    await operations(db);
    client.close()
  } catch (error) {
    res.status(500).json({ message: "Database Error", error});
  }
}

// App
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));

// Hello routes
app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

// Add upvotes
app.post('/api/articles/:name/upvote', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne(
      { name: articleName }
    );
    await db.collection('articles').updateOne(
      { name: articleName },
      { '$set': { upvotes: articleInfo.upvotes + 1}}
    );
    const updatedArticleInfo = await db.collection('articles').findOne(
      { name: articleName }
    );
    res.status(200).json(updatedArticleInfo);
  }, res);
});

// Add comment
app.post('/api/articles/:name/add-comment', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db.collection('articles').findOne(
      { name: articleName }
    );
    await db.collection('articles').updateOne(
      { name: articleName },
      { '$set': { comments: articleInfo.comments.concat({ username, text })}}
    );
    const updatedArticleInfo = await db.collection('articles').findOne(
      { name: articleName }
    );
    res.status(200).json(updatedArticleInfo);
  }, res)

});

// Obtain upvotes and comments for a article
app.get('/api/articles/:name', async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res)
});

// React Application route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// Listen
app.listen(8000, () => console.log('Listening on 8000'));
