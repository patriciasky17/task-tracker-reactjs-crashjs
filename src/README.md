# ReactJs Documentation

## JSX Expressions


## Components


## State + Lifescycles




## Hooks

### useState

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

//The res.json() function sends a JSON response. 
//This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.

'useState' is a hook that is used to create a state variable.


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