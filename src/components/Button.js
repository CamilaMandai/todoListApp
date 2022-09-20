import React from 'react';
import './button.css';

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
        <button
          type='submit'
          onClick={handleClick}
        >
          +
        </button>
    )
  }
}

export default Button;