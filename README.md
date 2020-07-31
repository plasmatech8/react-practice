# React Material-UI practice

[Tutorial](https://www.youtube.com/watch?v=pHclLuRolzE) by Anthony Sistilli on
YouTube.

Installation:
```bash
npm install @material-ui/core
```

## 1. Intro project

### 1.1 Button

```js
import { Button } from '@material-ui/core';

<Button variant="outlined" color="secondary"> Our first button</Button>
```

Note: in vscode, you can use ctrl+space to view autocomplete options in the
JSX Component.

See Button props on website: https://material-ui.com/api/button/

### 1.2 Styling / Theme

We can create a theme object to override the
[Default Theme object](https://material-ui.com/customization/default-theme/#default-theme).

We can use [createMuiTheme](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme)
to create a new Theme.

Then we can use [ThemeProvider](https://material-ui.com/styles/api/#themeprovider)
to apply the theme.

theme.js
```js
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
```

index.js
```js
//...
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 1.3 Typograpy

Another important component is [Typography](https://material-ui.com/api/typography/).

It allows us to write text in a cleaner, more programatic way.

(Note: you can access docs link in vscode via hover)

i.e.
```js
<Typography variant='h2' color='primary'>Hello Material-UI</Typography>
// instead of
<h1>Hello Material-UI</h1>
```

### 1.4 makeStyles hook

We can use the makeStyles hook to create new styles which can be added to our
Components by passing them into the className property.
(overrides defaults + custom theme)

```js
// ...
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique' // Add slant to text
    color: 'red',
    fontSize: '30px'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloThereStyle}>
        Hello Material-UI
      </Typography>
      <Button variant="outlined" color="secondary"> Our first button</Button>
    </div>
  );
}
// ...
```
