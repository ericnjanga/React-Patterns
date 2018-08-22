import React from 'react';

/**
 * High-order Functions returning a component enriched with a newly fetched data
 * @url
 * @Component
 * 
 * 1) It fetches the data from the url's endpoints and saves it in the state
 * 2) Then remains transparent while returning the component (passes down its state and props)
 * 
 * Notes:
 * - @url can be "static" or "a function". Use a function to pass in params.
 * - Example: (props => `https://prefix/${props.username}/suffix`)
 */
const withData = url => Component => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    /**
     * Fetch url and save it in the state
     */
    componentDidMount() {
      // Allowing url to receive params
      // - url params will be passed via a function
      const endpoint = typeof url === 'function' ? url(this.props) : url;

      fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          this.setState({ data: [{ id: 0, description: data.message, }] })
        } else {
          this.setState({ data })
        }
      });
    }

    /**
     * Pass state and props down to component
     */
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      );
    }
  }; // class

}

export default withData;
