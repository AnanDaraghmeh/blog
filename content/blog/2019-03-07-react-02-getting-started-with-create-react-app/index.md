---
title: React 02 - Getting started with create-react-app
date: 2019-03-07
description: Getting started with create-react-app
thumbnail: '../../assets/react-logo-2.png'
---

**This series of articles target absolute beginners to react.**

As I mentioned in the previous article, [create-react-app](https://github.com/facebook/create-react-app) is the easiest and the recommended way to get started with react.
In this article, I will explain the basic steps to get you up and running with this tool.

## What is create-react-app?

create-react-app is the official development environment from the team who created React library. You can consider it as a react-base framework.

## Why do you need create-react-app?

Setting a modern development environment is not easy. In fact, for beginners it can be more challenging that righting actual code. Why? well, writing code is not just writing HTML, CSS and javaScript. Many tools are essential part of to optimize applications and make them ready for deployment.
I will mention some of the things that create-react-app gives us out-of-the-box:

- Webpack and babel pre-configuration: webpack is a javascript bundler (it bundles all javascript files into big chunks) and babel is a compiler (it compiles modern javaScript to old javaScript so the browsers can
  understand the code).
- Development server with hot module reloading, this allows you to write code and see changes immediately in
  the browser.
- Support for PWAs (progressive web apps): this allows the application to work without internet connection and
  make it appear like an actual app when the user add it to home screen of mobile devices.

---

## To get started:

1. Make sure that you have installed [node.js](https://nodejs.org/en/) on your computer (node is a javaScript runtime, it allows javaScript code to run on your computer and outside the browser).

To check if you have node already installed on your computer, open the terminal and run the following command:

```javascript
node --version;
```

<br>
Node comes with npm (a package manager), run the following command in the terminal to make sure that it is installed correctly:

```javascript
npm --version
```

<br>
2. Now open your terminal an run the following command and hit enter:

```javascript
npx create-react-app [app-name]
```

`[app-name]` is the name of your new project.
Wait until create-react-app does its thing as it may take several minutes.

3. Open your text editor (VS code or Atom or your text editor of choice) and then open the folder that you have just created in the editor.

## Explanation of files and folder inside the project directory:

- `/node_modules`: javascript packaged that are used by create-react-app
- `/public`: folder contains the public-facing files, mainly the index.html which is the only html file that you need.
- `/src`: this folder **contains the source code of the application and your main work place.**
- `package.json`: a json file lists all the packages (dependencies) that are used in the project.
- `package-lock.json`: a json file that lists the exact version number of the packages that your packages are dependent on.
- `.gitignore`: a file that lists files and folders that should be ignored by git (version control system).

**The next article will be about Components in react.**
