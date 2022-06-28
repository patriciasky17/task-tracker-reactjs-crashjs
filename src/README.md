# ReactJs Documentation

## JSX Expressions

```
const element = <h1>Hello, world!</h1>;
```

This variable declaration is an example of JSX.

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
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

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


## Components


## State + Lifescycles




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






## Props



## Lists and Keys




## Routes



## Fetch


## Event Handler


## Conditional Rendering

### && Operator


### Inline if-else




## Composition vs Inheritance




#### Note : This documentation is still on progress