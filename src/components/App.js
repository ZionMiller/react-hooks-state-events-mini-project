import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categorySelected, setCategorySelected] = useState("All")

  // console.log(tasks)

  // can name tasktodelete whatever
  function handleDelete(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text))
  }

  function handleCategory(categoryClick) {
    setCategorySelected(categoryClick)
  }

  const tasksToDisplay = tasks.filter(
    (task) => categorySelected === "All" || task.category === categorySelected)

  function addTask(text, category) {
    const newTask = {
      text: text,
      category: category,
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
      handleCategory={handleCategory}
      />
      <NewTaskForm key={CATEGORIES}
      categories={CATEGORIES}
      addTask={addTask}
      />
      <TaskList handleDelete={handleDelete}
      tasks={tasksToDisplay}
      />
    </div>
  );
}

export default App;
