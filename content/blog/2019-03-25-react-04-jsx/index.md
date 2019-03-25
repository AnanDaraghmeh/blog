---
title: React 04 - JSX in React
date: 2019-03-25
description: JSX in React
thumbnail: '../../assets/react-logo-2.png'
---

**This series of articles target absolute beginners to react.**

JSX is a syntactic extension for javascript. It has an XML-like syntax which is very similar to HTML.

JSX is similar to HTML templating engines such as EJS (Embedded JS).

Here is a simple example of a react functional component that returns some JSX:

```javascript
const JSX = () => {
  return (
    <div>
      <h1>Hello from JSX!</h1>
    </div>
  );
};
```

<br>
<br>

## Important points to be aware of:

1. You can only return one parent element.
   The following `return` method will throw an error:

```javascript
const JSX = ()=>{
    return (
        <nav>
            here goes the navbar..
        </nav>
        <section>
            another section..
        </section>
    )
}
```

<br>

To fix this, everything inside the `return` method should be wrapped within a `div` As follows:

```javascript
const JSX = () => {
  return (
    <div>
      <nav>here goes the navbar..</nav>
      <section>another section..</section>
    </div>
  );
};
```

<br>

> `React.Fragment` is an alternative way to wrap everything inside the `return` method if you hate creating extra empty divs!

2. To write javascript inside of JSX, use double curly braces `{}` where you can write any valid javascript.

3. Self-closing HTML tags need to be closed such as `img` tag.

```javascript
return <img src="" alt="" />;
```

<br>

4. `class` HTML attribute becomes `className` in JSX.

5. `for` HTML attribute becomes `htmlFor` in jsx.

6. `style` HTML attribute is an object in JSX, not a string.

7. Inline events are camelCased in JSX, such as `onClick`.

**The next article will be about props.**
