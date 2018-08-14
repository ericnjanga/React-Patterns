import React from 'react';
import FocusedInput from './Focus.js';


/**
 * RESET (Use cases of "ref" -2-)
 * - Example showing how a React Component (non-native component) can be targetted using "red"
 *
 * NOTE:
 * - The reference we receive as a parameter of the callback is not a DOM node instance, but the instance of the component itself.
 * - This is really powerful, because it gives us access to the internal instance of a child component, but it is also dangerous and should be avoided.
 * - This technique should be avoided unless absolutely necessary (it breaks the encapsulation and makes refactoring pretty hard.)
 */


class Reset extends React.Component {

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {

    // We have access to the reference internal instance (React Component)
    // and use its methods (and more)
    // (This technique should be avoided unless absolutely necessary)
    this.comp.reset();

  }

  handleSubmit(event) {

    event.preventDefault();

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <FocusedInput
          ref={comp => (this.comp = comp)}
        />
        <button onClick={this.handleClick}>Reset</button>
      </form>
    );

  }

}

export default Reset;
