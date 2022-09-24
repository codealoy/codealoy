/**
 * @hidden
 */

const indexHtmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

const indexCode = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`

const appCode = `import Button from './Button.js';

 export default function App() {
   return (
     <>
       <h1>Bye World!!</h1> 
       <p>break</p>
       <Button />
     </>
   )
 }`

const buttonCode = `export default function Button() {
   return (
     <>
       <button>Click me</button>
     </>
   )
 }`

const styleCode = `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`

export const REACT_PRESET = {
  files: {
    '/App.js': {
      code: appCode,
    },
    '/Button.js': {
      code: buttonCode,
    },
    '/index.js': {
      code: indexCode,
    },
    '/styles.css': {
      code: styleCode,
    },
    '/public/index.html': {
      code: indexHtmlCode,
    },
  },
  dependencies: {
    react: '^18.0.0',
    'react-dom': '^18.0.0',
    'react-scripts': '^4.0.0',
  },
  entry: '/index.js',
  main: '/App.js',
  environment: 'create-react-app',
}
