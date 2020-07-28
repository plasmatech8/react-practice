# React, Redux & Firebase App Tutorial

[Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3)
by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) on YouTube.

- [React, Redux & Firebase App Tutorial](#react-redux--firebase-app-tutorial)
  - [Intro](#intro)
  - [01. Getting Started](#01-getting-started)
  - [02. NavBar Component](#02-navbar-component)
  - [03. Dashboard Component](#03-dashboard-component)


## Intro

We will be using:
* React & Redux
* Thunk (package for asyncronous code)
* Firebase (Firestore, Auth, Cloud Functions, Hosting)

![](docs/2020-07-28-11-53-12.png)

![](docs/2020-07-28-12-01-15.png)

![](docs/2020-07-28-12-01-34.png)


## 01. Getting Started

Initialise an app:
```bash
npx create-react-app marioplan
cd marioplan
npm start
```

We will use [MaterializeCSS](https://materializecss.com/getting-started.html)
to easily style our website. CDN:
```html
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

We will structure the code as:
```
src
├── App.js
├── components
│   ├── auth
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   ├── dashboard
│   │   ├── Dashboard.js
│   │   └── Notifications.js
│   ├── layout
│   │   ├── Navbar.js
│   │   ├── SignedInLinks.js
│   │   └── SignedOutLinks.js
│   └── projects
│       ├── CreateProject.js
│       ├── ProjectDetails.js
│       ├── ProjectList.js
│       └── ProjectSummary.js
├── index.css
├── index.js
└── serviceWorker.js
```

## 02. NavBar Component

NavBar:
* `<nav>` tags are automatically styled and positioned by Materialize
* The `SignedInLinks` or `SignedOutLinks` component will show a set of nav links depending on whether the user is logged in.
* `<NavLink>` component makes it easy to make Nav entries.

It is easy to style using Materialize:
* Profile button: `nav-wrapper grey darken-3`
* Navbar colours:`btn btn-floating pink lighten-1`
* Homepage button: `brand-logo`

![](docs/2020-07-28-13-02-10.png)

## 03. Dashboard Component

Dashboard:
* Left side (ProjectList), Right side (Notification)
* The cards will be styled with MaterializeCSS cards
* Materialize grid: `row red` (row) and `col s12 m6 blue` (column, fill 12 cells on small [the 2 columns are placed in stacks], 6 cells on medium [the two columns are side-by-side])

We will also add propper routing.

![](docs/2020-07-28-14-23-29.png)
