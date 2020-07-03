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

