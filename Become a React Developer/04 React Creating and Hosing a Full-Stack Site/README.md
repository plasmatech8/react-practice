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
Upvotes will be added to `ArticlePage` with a `UpvotesSection` component.

Comments will be added to `ArticlePage` with a `CommentsList` component.

#### Comments list
```js
<CommentsList comments={articleInfo.comments}/>
```
This section needs to show a h3 heading and display comments passed in.

#### Upvote section + button
```js
<UpvotesSection
  articleName={name}
  upvotes={articleInfo.upvotes}
  setArticleInfo={setArticleInfo}
/>
```
The section needs to display the number of upvotes.

The section needs to send a POST request when the button is clicked.

#### Comment form
```js
<AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
```
We need to have state for username and commentText fields. The input tags
need `value={myState}` and `onChange={(e) => setMyState(e.target.value)}` so
that the state and form values are syncronised.

We need the submit button to send a POST request with JSON content to the
server using an async function.

On submission, the article info on the page will be set to the returned info
on the server - so that the commentsList updates when the button is submitted.

```js
  // Event for comment submission
  const addComment = async () => {
    const result = await fetch(
      `/api/articles/${articleName}/add-comment`,
      {
        method: 'POST',
        body: JSON.stringify({username, text: commentText}),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const body = await result.json();
    setArticleInfo(body);
    setUserName('');
    setCommentText('');
  }
```

## 5. Hosting the Site

### Final preparations

`my-blog/public/index.html`:
* Set title tag

`my-blog/public/manifest.json`:
* Change short_name and name

Build the React app:
```bash
cd my-blog
npm run build
```

Copy `my-blog/build` to `my-blog-backend/src/build`.

Add to `myblog-backed/src/server.js`:
```js
app.use(express.static(path.join(__dirname, './build')));
```
Add to the bottom of `myblog-backed/src/server.js` (if no other routes match):
```js
// React Application route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
```

### Productionise

Ensure the code is in a remote Git repository (GitHub).

We will create an EC2 instance and create the server.

SSH into EC2 server:
```bash
cp ~/Downloads/my-blog-keypair ~/.ssh/my-blog-keypair.pem
chmod 400 ~/.ssh/my-blog-keypair.pem
ssh -i ~/.ssh/my-blog-keypair.pem ec2-user@54.206.125.215
```

Install git and npm (see [this](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)):
```bash
sudo yum install git -y

# Install npm using nvm tool
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v10.19.0
npm install -g npm@latest
```

Install MongoDB (see [this](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/))
```bash
sudo nano /etc/yum.repos.d/mongodb-org-4.2.repo

# Copy-paste
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc

# Do
ctrl+o, enter, ctrl+x

sudo yum install -y mongodb-org
sudo service mongod start
```

Insert documents:
```bash
mongo
use my-blog
db.articles.insert([
  {
      name: 'learn-react',
      upvotes: 0,
      comments: [],
  },
  {
      name: 'learn-node',
      upvotes: 0,
      comments: [],
  },
  {
      name: 'my-thoughts-on-resumes',
      upvotes: 0,
      comments: [],
  }
])

# Do
ctrl+c
```

Retrieve code from GitHub and install npm packages:
```bash
git clone https://github.com/plasmatech8/react-practice.git

cd react-practice/Become\ a\ React\ Developer/04\ React\ Creating\ and\ Hosing\ a\ Full-Stack\ Site/my-blog-backend
npm install
```

Install `forever` package to keep our server running permanently.
```bash
npm install -g forever
forever start -c "npm start" .

# Check server
forever list
```

Map port `80` to `localhost:8000`:
```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
```

Open security group rules: Inbound HTTP anywhere.

Open browser at public IP address.

**DONE**

## 6. Next Steps

* Add login/logout
* Improve form error handling
* Secure MongoDB database
* Buy a domain name
* Write content for blog
