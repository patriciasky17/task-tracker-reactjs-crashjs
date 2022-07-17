# ReactJs Documentation

## JSX Expressions

```
const element = <h1>Hello, world!</h1>;
```

This variable declaration is an example of JSX.

### JSX vs Without JSX

JSX :

```
const myElement = <h1>I use JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

Without JSX :

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


### Embedding Expressions in JSX

Simple example:

```
const name = 'Patricia Ho';
const element = <h1>Hello, {name}</h1>;
```

More complex example:

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Patricia',
  lastName: 'Ho'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

With JSX, we can write expressions inside curly braces { }.

JSX is an expression too. It means that we can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

Example:

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX

Example:

```
const element = <a href="https://www.reactjs.org"> link </a>;
const elementOne = <img src={user.avatarUrl}></img>;
```

We have 2 options to specify attributes with JSX:
1. Use quotes to specify string literals as attributes (Line 1 example)
2. Use curly braces to embed a JavaScript expression in an attribute (Line 2 example)

Note :
Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. It should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.


#### Warning!

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.


### Specifying Children with JSX

JSX follows XML rules, and therefore HTML elements must be properly closed.

Close it immediately with /> if a tag is empty, like XML:

```
const element = <img src={user.avatarUrl} />;
```

JSX tags may contain children:

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here again.</h2>
  </div>
);

```

### [JSX Represents Objects](https://scrimba.com/scrim/cZJ2Kcz)

Babel compiles JSX down to React.createElement() calls.

These two examples are identical:

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.


### JSX is one top level element

The HTML code must be wrapped in ONE top level element.

So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

Wrap two paragraphs inside one DIV element:

```
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

A fragment looks like an empty HTML tag: <></>.

Wrap two paragraphs inside a fragment:

```
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```


## Components + Props

### Function vs Class Components

#### Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The class component requires a render() method, this method returns HTML.

ES6 Class Component :
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### Function Component

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

Function Component :

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Rendering a Component

```
function Welcome(props) { //Focus on this one!
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Patricia" />; //Focus on this one too!
root.render(element);
```

Recap :

1. We call root.render() with the <Welcome name="Patricia" /> element.
2. React calls the Welcome component with {name: 'Patricia'} as the props.
3. Our Welcome component returns a Hello, Patricia element with h1 as the result.
4. React DOM efficiently updates the DOM to match Hello, Patricia with h1.


##### Note: Always start component names with a capital letter.

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.



### Props

Components can be passed as props, which stands for properties.

Props are like function arguments, and send them into the component as attributes.

For example, we use an attribute to pass name to the Welcome component, and use it in the render() function:

```
function Welcome(props) { 
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Patricia" />; //Focus on this one too!
root.render(element);
```

It is not recommend to change the props value directly such as props.name = "Another"

### Composing Components

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Patricia" />
      <Welcome name="Hoshizora" />
      <Welcome name="Tsuki" />
    </div>
  );
}
```

In here, we can see that function App() or App Component renders Welcome many times.


### Components in File

Note that the filename must start with an uppercase character.

This is the new file, we named it "About.js":

```
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <h4>Version 1.0.0.</h4>
    <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
```

To be able to use the About component, you have to import the file in your application.

```
import { useState, useEffect } from "react" 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";  //these are for making the website not reloading alot 
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() { 
....
return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          .....
          <Route path='/about' element={<About />} /> //this one!
        </Routes>

        <Footer />
      </div>
    </Router>
);

```

## State + Lifecycles

### [State](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/)

State is used with React Component Classes to make them dynamic. It enables the component to keep track of changing information in between renders. More specifically, the state of a component is an object that holds information that may change over the lifetime of the component.

State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.

### State vs Props
1. Props are immutable. Once set they can’t be changed, while State is observable. It can hold data that may change over time
2. Props can be used in either function or class components, while State is limited to class components
3. Props are set by the parent component while State is updated by event handlers.
4. Props are read-only while state changes can be asynchronous.
5. Props can't be modified while state can be modified using this.setState

Note : In this one I'll use 




### Lifecycles

In general, we might define a lifecycle as birth, growth & death. And our React components follow this cycle as well: they’re created (mounted on the DOM), they experience growth (by updating) and they die (unmounted from the DOM). This is the component lifecycle!

Within the lifecycle of a component, there are different phases. These phases each have their own lifecycle methods. 




## Hooks

### useState

'useState' is a hook that is used to create a state variable.

### useEffect



## Form + CRUD

this is a function that is being called when the page loads and it is being called in the useEffect hook and it is being called in the addTask function 

### Add/Create
```
  const addTask = async (task) => { 
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task), //javascript object to json string
    });

    const data = await res.json();

    setTasks([...tasks, data]);

  };
```

The res.json() function sends a JSON response.

This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.




### Read




### Update




### Delete 









## Lists and Keys




## Routes



## Fetch


## Event Handler


## Conditional Rendering

### && Operator


### Inline if-else




## Composition vs Inheritance




##### Note : This documentation is still on progress