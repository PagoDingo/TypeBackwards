import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';;
/* This function handles reversing
  the User's Input : 
*/ 
function reverseString(string) {
  var reversedString = ''
  for (var i = string.length-1; i >= 0; --i) {
    reversedString += string[i]
}
  return reversedString
}
 
class ReverseStringComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {string: ''}
    this.submitHandle = this.submitHandle.bind(this)
  }
  submitHandle = (event) => {
      // Set the component's state here
      this.setState({string: reverseString(this.element.value)});
      event.preventDefault();
  }
  // Output the component
  render() {
    return (
      <form onSubmit={this.submitHandle}>
        <h1><b>Type Backwards.</b>
        </h1>
        <h3>Enter a string:</h3>
        <input
          type="text" ref={el => this.element = el}
        />
        <h1 id="output">'{this.state.string}'</h1>
      </form>
    );
  }
}


ReactDOM.render(<ReverseStringComponent />, document.getElementById('root'));
