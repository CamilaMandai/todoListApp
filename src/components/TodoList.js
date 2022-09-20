import React from 'react';
import './todoList.css';

class TodoList extends React.Component {

  render() {
    const { removeTask, list } = this.props;

    return (
      <div>
      {list.map((element, index) =>
       <label 
       htmlFor={index}
       className="todo-item"
       key={index}>
         <input 
         className='todo-check' 
         id={index} type="checkbox" 
         onChange={() => removeTask(element)}/>{element}</label>)}
    </div>
    )
  }
}

export default TodoList;