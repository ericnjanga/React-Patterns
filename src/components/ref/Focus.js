import React from 'react';


/**
 * FOCUS (Use cases of "ref" -1-)
 * - When you need to access the underlying DOM nodes to perform some imperative operations
 * - ("ref" should be avoided on most cases, only use them when React compliant solutions are exhausted)
 * - (ref forces the code to be more imperative, and harder to read and maintain)
 * 
 * SCENARIOS WHEN WE MIGHT NEED TO USE IT:
 * - Where we are integrating our components with other imperative libraries, such as jQuery
 * - When there is no React compliant solutions to our problem
 */


class Focus extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
    };
    this.handleClick = this.handleClick.bind(this);

    // reset and handleChange are used in the second "ref" demonstration
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  reset(event) {

    this.setState({ value: '' });

  }

  handleChange(event) {

    this.setState({ value: event.target.value });

  }

  handleClick(event) {

    event.preventDefault();
    this.input.focus();

  }

  render() {

    return (
      <div
        style={{ border: '1px solid #0077d2' }}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          ref={input => (this.input = input)}
        />
        <button
          onClick={this.handleClick}
        >Focus Text Input</button>
      </div>
    );

  }

}

export default Focus;
