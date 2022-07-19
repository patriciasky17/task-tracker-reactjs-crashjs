// import React from "react";
import { useState, useEffect } from "react" 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";  //these are for making the website not reloading alot 
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
// import StateProps from "./StateProps"; //dummy

function App() { 
  // Declare a new state variable, which we'll call "showAddTask"
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]); 

  //useEffect is used for create side effects or deal with side effects(if you want something to happen when the page loads)
  useEffect(() => {
    const getTasks = async () => { //this is a function that is being called when the page loads and it is being called in the useEffect hook
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) //[] is to add any dependencies

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()

    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()

    return data
  }
  

  // Add Task
  const addTask = async (task) => { 
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task), //javascript object to json string
    });

    //The res.json() function sends a JSON response. 
    //This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = async (id) => {  
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle,
    reminder: !taskToToggle.reminder};

    const res = await fetch( `http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  }

  // && is for using ternary operation without else

  return (
    <Router>
      <div className="container">
        {/* <StateProps /> */}
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path='/' //the route in website
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}


export default App;








// DONT MIND BELOW THIS XD



// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

//this is the root one (headet, event, footer, etc)


// import logo from './logo.svg'; //spinning react logo
// import './App.css'; // basic styling

//  <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header> 

  // const name ="Patricia";
  // const x = true;

  // <h2>Hello {name}</h2>
  // <h2>Hello {x ? "Yes" : "No"}</h2>

//   const [tasks, setTasks] = useState([
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     }
// ]);