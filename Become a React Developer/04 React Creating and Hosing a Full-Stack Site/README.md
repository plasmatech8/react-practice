# React: Creating and Hosting a Full-Stack Site

## 1. Creating a React Front End

### Basics

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

