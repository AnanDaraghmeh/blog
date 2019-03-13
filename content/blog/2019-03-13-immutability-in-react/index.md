---
title: Immutability in react
date: 2019-03-13
description: Immutability in react. Waht is it and why it is important?
---

![react](../../assets/react-logo-2.png)

**"DO NOT MUTATE THE STATE!"**

At the beginning of my journey learning react, I saw this sentence everywhere. Every tutorial and blog post will warn you from mutating the state but why? and how?

## Immutability: A simple explanation

Let's imagine that we have a simple statefull Navbar component that has a toggler icon which will toggle a mobile menu on and off depending on the state:

```javascript
class Navbar extends React.Component {
    state= {
        isMobileMenuShown: false
    }

    render(){
        return(
            <>
            <header>
                <div className="toggler"></div>
                <div className="brand"></div>
            </header>
            <nav className="mobile-menu"></nav>
            </>
        )
    }
}
```
<br>

The virtual DOM is an important concept in react. We usually do not touch the DOM directly (and doing so is considered an anti-pattern). React compares its virtual DOM with the real DOM and it selectively changes the elements in the real DOM that have been updated in the virtual DOM.

When a component has a state, it will be rerendred everytime its state has been updated. When a state changes, react compares the old copy of state with the new one and if there is a difference, the component will be rerenderd.

#### What happens if the state is mutated directly?
React will not see the difference between the two copies of state (you have only one copy). Sometimes this does not cause an obvious issue but many times this will cause unexpected behaviors.

#### Why immutability is important?
Besides avoiding unexpected behaviours and components not being rendered correctly, immutability has an impact on the performance of the application. Simply, immutability leads to a better performance.

### The wrong way:
In the above example toggling the mobile menu on and off can be done by mutating the state directly as follows:

```javascript
class Navbar extends React.Component {
    state= {
        isMobileMenuShown: false
    }

    toggleMobileMenu = ()=>{
        this.setState({
            isMobileMenuShown: !this.state.isMobileMenuShown
        })
    }

    render(){
        const {isMobileMenuShown} = this.state;
        return(
             <>
            <header>
                <div onClick={this.toggleMobileMenu} className="toggler"></div>
                <div className="brand"></div>
            </header>
            {isMobileMenuShown && (<nav className="mobile-menu"></nav>)}
            </>
        )
    }
}
```
<br>

### The right way:
A better way to do this is by using the previous state as an argument in the `setState()` method:

```javascript
    toggleMobileMenu = ()=>{
        this.setState(prevState => {
            return{
                isMobileMenuShown: !prevState.isMobileMenuShown
            }
        })
    }
```
<br>

> Note: Immutability is also a fundemantal principle in redux library

**Immutability in redux will be discussed in a separate article**