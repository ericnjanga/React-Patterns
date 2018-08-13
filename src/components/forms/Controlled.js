import React from 'react';


/**
 * Component characteristics:
 * - Single handler function (1 handler function for as many fields as possible)
 */


class Controlled extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  /**
   * Single change handler
   * (Abstracts input change handling process so that multiple fields changes can be processed)
   * @param {*} target 
   */
  handleChange({ target }) {

    this.setState({
      [target.name]: target.value,
    });

  }

  handleSubmit(e) {

    e.preventDefault();
    console.log(this.state);

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          defaultValue="Lead The Field"
        />
        <button>Submit</button>
      </form>
    );

  }

}

export default Controlled;
