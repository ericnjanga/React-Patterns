import React from 'react';


/**
 * SINGLE EVENT HANDLER
 * - Handling multiple events on one component
 */


class SingleEventHandler extends React.Component {

  constructor(props) {

    super(props);
    this.handleEvent = this.handleEvent.bind(this);

  }

  /**
   * Single change handler
   * (Can be used to handle multiple events on a single component)
   * Whenever we need to create a new event handler for the same component, instead of creating a new method and binding it, we can just add a new case to the switch.
   * @param {*} target
   */
  handleEvent(event) {

    event.preventDefault();

    switch(event.type) {
      case 'click':
        console.log('- Click event');
        break;
      case 'dblclick':
        console.log('- Double click event');
        break;
      case 'mouseover':
        console.log('- Mouse enter event');
        break;
        case 'mouseout':
          console.log('- Mouse out event');
          break;
      case 'submit':
        console.log('- Submit event');
        break;
    }

  }

  render() {

    return (
      <form>
        <button
          onClick={this.handleEvent}
          onDoubleClick={this.handleEvent}
          onMouseOver={this.handleEvent}
          onMouseOut={this.handleEvent}
        >mouse enter, click, double click, leave</button>
      </form>
    );

  }

}

export default SingleEventHandler;
