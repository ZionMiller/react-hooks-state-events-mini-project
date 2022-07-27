import React from "react";

function CategoryFilter({categories, handleCategory}) {

  function clickCategory(e) {
    handleCategory(e.target.value)
    e.target.className = "selected"
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        { 
          categories.map((category) => (
            <button key={category} className="" onClick={clickCategory} value={category}>{category}</button>
          ))
        }
    </div>
  );
}

export default CategoryFilter;
