---
title: React 03 - React Components
date: 2019-03-11
---

![react](../../assets/react-logo-2.png)

**This series of articles target beginners to react.**

In the previous article, I talked about the advantages of create-react-app particularly for beginners. In this article, I will talk about the most important concept in react, components.

If you want to follow along, after creating a new project with create-react-app, remove everything inside the `/src` folder except `index.js`.

> index.js is the entry point in a react project and it must be called index.js.

## Two types of components

There are two types of components in react, class-based components and functional components.

#### Class-based components:

create a new file called `HelloWorld.js` inside `/src` folder.

A class-based component is an ES6 class as shown below:

```javascript
import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default HelloWorld;
```

> Node.js by default supports commonJS modules and importing is done using `require()`
> but thanks to create-react-app and babel we can use ES modules instead.

> classes are introduced in ES6 and as I mentioned before, the react library heavily uses the newer javascript features and syntax.

In the above example, we are using ES6 import to import react library to our js module and then creating a class component and extending react component. After creating the class, we are exporting it so it will be available in other js modules and can be imported.

> `extends` in ES6 classes is used for sub-classing (ie, inheritance).

The `render()` method is the only requirement to create a class component in react. This method returns what will be rendered on the screen using JSX (the HTML-like syntax in the above example).

> JSX will be discussed in further details in a following article.

Few things to note:

- The name of a react component should be CamelCased.
- Typically, a component is exported as a default export rather than a named export.
- JSX looks similar to HTML, but it is based on XML.

After creating the HelloWorld component, we can import it to index.js:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld />, document.querySelector('#root'));
```

Here we are importing ReactDOM library in addition to react form `/node_modules`. ReactDOM is needed whenever we want to act on the DOM (typically in index.js).

The ReactDOM.render() method accepts 2 arguments:

- the first one: what will be rendered in the DOM.
- the second one: where to render (traditionally a div with an id of root).

After that, open your terminal (if you are using VS code, you can use its integrated terminal), make sure that you are in the project directory and then run the following command:

```
npm start
```

This will start a local development server (on localhost:3000) and opens a new tab in your default browser.

In this very basic example, You should be able to see "Hello World!" inside your browser window.

#### Functional components:

Functional components are simply javascript functions that return JSX. The above class component can be converted to a functional component:

```javascript
import React from 'react';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default HelloWorld;
```

## So, what is the difference?

- Class components are usually considered "smart" components as they can hold logic besides returning JSX, while functional components are "dummy" components and typically used for presentational purpose.
- Class components can have a state (will be discussed later, but think of it as a local temporary data store) while functional components cannot.
- Class components have life-cycle methods (will be discussed later, these methods are used to control the component during its life cycle form the moment it is mounted on the screen to the moment it is unmounted).
- Class components provides a better way of organizing the code, especially when you need to create several helper methods.

> A new feature has been introduced to react (react hooks) that enables functional components to have a state and life-cycle methods.

**The next article will be about JSX.**
