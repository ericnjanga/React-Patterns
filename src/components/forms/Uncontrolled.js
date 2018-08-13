import React from 'react';


/**
 * UNCONTROLLED COMPONENT:
 * - Used when minimal control over the form field is need
 *
 * Features:
 * - one-time value retrieval
 * - validating on submit
 *
 * Good practice:
 * - Single handler function (1 handler function for as many fields as possible)
 */


class Uncontrolled extends React.Component {

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
        <fieldset>
          <label>
            First Name:{' '}
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            last Name:{' '}
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    );

  }

}

export default Uncontrolled;
