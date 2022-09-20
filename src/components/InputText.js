import React from 'react';
import './inputText.css'

class InputText extends React.Component {
  render() {
    const { handleChange, newTodo } = this.props;

    return (
      <input 
      className="new-task-input" 
      type="text" onChange={handleChange} 
      name="newTodo" value={newTodo} 
      // onKeyPress={handleEnter}
      placeholder="Nova Tarefa"
      />
    )
  }
}

export default InputText;