import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [textInForm, setTextInForm] = useState("")
  const [category, setCategory] = useState("code")
  // console.log(dropdownCategory)

  function handleSubmit(e) {
    e.preventDefault();
    addTask(textInForm, category);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" 
          value={textInForm.text}
          onChange={(e) => setTextInForm(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
         {categories.map((category) => 
          <option key={category}>{category}</option>
         )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
