import React from 'react';


/**
 * How to properly handle input file
 * - In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.
 * - Input value must be accessed via "ref" (onChange or onSubmit ... it doesn't matter)
 * 
 * Further readings:
 * - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
 */


class InputFile extends React.Component {

  constructor(props) {

    super(props);
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  /**
   * ...
   * @param {*} e
   */
  handleSubmit(e) {

    e.preventDefault();
    console.log(`Selected file - ${this.fileInput.current.files[0].name}`);

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            Upload file:
            <input
              type="file"
              ref={this.fileInput}
            />
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    );

  }

}

export default InputFile;
