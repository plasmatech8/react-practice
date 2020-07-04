# React: Creating and Hosting a Full-Stack Site

## 1. Creating a React Front End

### Starting

```bash
npx create-react-app my-blog --use-npm
cd my-block
npm start
```

We will use react-router to create pages:
* HomePage
* AboutPage
* ArticlesListPage
* ArticlePage (display any article depending on URL)

### Routing

We will use `<Route exact path="/article/:name" component={ArticlePage}>` to
route to different articles.

We will use the `<Switch>` component to only render the first route that is
matched.

`name` can be accessed using:
```js
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    // ...
}
```

### Generic component

In order to have seperate article lists to show popular articles and the list
of articles, we will create an `<ArticlesList articles={articles}/>` component.

### Not Found

We will create a page not found route that is the final route in the router and
can be used in the `ArticlePage` when no article is found.

## 2. Creating a Node Back End

### Starting

```bash
cd my-blog-backend
npm init -y
npm install -s express

mkdir src
touch src/server.js
```

We also need to make a few small changes to allow the backend to support ES6
(this was handled for us in our front-end):
`npm install --save-dev @babel/core @babel/node @babel/preset-env`

`.babelrc`:
```json
{
    "presets": ["@babel/preset-env"]
}
```

Run the server: `npx babel-node src/server.js`

We will also want to be able to parse post-request body:
`npm install -s body-parser`

We can test the `/hello` endpoint using postman or other.

### Upvote API endpoint

We will add an article upvote endpoint which increments the votes under POST:
`http://localhost:8000/api/articles/learn-react/upvote'`.

### Node Live Server

Install: `npm install --save-dev nodemon`

Use to run server we can use: `npx nodemon --exec babel-node src/server.js`

To make this more convenient, we can go into `package.json` and add an item to
the `scripts` object:
```json
    "start": "npx nodemon --exec npx babel-node src/server.js",
```
Now we can just use: `npm start`

### Comment API endpoint

We will add a comments endpoint under POST:
`http://localhost:8000//api/articles/:name/add-comment`
json={username, password}.

## 3. Setting up MongoDB

### Setup database

Setup the (default) database: `sudo mkdir -p data/db`

To ensure permissions are correct: `sudo chown -R `id -us\` /data/db`

Open mongo shell and select database:
```
mongo
> use my-blog
> db.articles.insert([
...     {
...         name: 'learn-react',
...         upvotes: 0,
...         comments: [],
...     },
...     {
...         name: 'learn-node',
...         upvotes: 0,
...         comments: [],
...     },
...     {
...         name: 'my-thoughts-on-resumes',
...         upvotes: 0,
...         comments: [],
...     }
... ])
```

Find documents: `db.articles.find({}).pretty()`

### Encorporate into backend

Install `npm install -s mongodb`

We will import MongoClient and create a helper function / context manager to
avoid repitition:
```js
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
```

We can pass the `operations` function and the `res` object into the context
manager and use the MongoDB database object/functions to perform operations.

Note that a lot of MongoDB functions are `await`/`promise` functions which
require to be contained used within an `async` function.

## 4. Connecting Front End and Back Ends

### Retreive Upvotes and Comments from backend

#### Retrieving data with React hooks

We can use the `fetch` function (fetch API) to retieve data from the database.
This will not work on Internet Explorer by default so we will install:
`npm install -s whatwg-fetch` and use `import 'whatwg-fetch';` in index.js to
make sure it works on all browsers.

We can create React hooks to keep track of states without using the Component
class notation.

#### useState & useEffect

We can use `useState` to set the state of the article, and `useEffect` to
retrieve the data.

Note that `useEffect` is run every time the component is mounted or updated, so
we need to make sure we add a `DependencyList` to the `useEffect` function.
* Empty array - when the component first loads
* Array with variable - when the variable changes

We want the effect to fetch data on mount and when the URL changes (to another)
article, so we will pass `name`.

#### fetch data

We will create a async function inside the effect function because we cannot
use a async function for an effect and we require the `await` keyword.

We will also need to avoid CORS.

In `package.json`, we will add another attribute:
```json
  "proxy": "http://localhost:8000/",
```
All http fetch requests will now be sent to the url. (This will also allow us
to remove the 'http://localhost' part of the url in the fetch function)

### Integration

#### Display info

We will use the state of the `ArticlePage` component:
```json
articleInfo: {
    "_id": "5efef0c4d7a99dfc9721454a",
    "name": "learn-node",
    "upvotes": 2,
    "comments": [
        {
            "username": "Matt",
            "text": "I am a big dumb-ass, LOL"
        }
    ]
}
```
Upvotes will be added to `ArticlePage` with a `p` tag.

Comments will be added to `ArticlePage` with a `CommentsList` component.

#### Upvote button


#### Add comment form