import React from 'react';
import PropTypes from 'prop-types';

import Selector from './Selector.js';
import Panels from './Panels.js';


const style = {
  root: {
    position: 'relative',
    border: '10px solid #999',
  },
  title: {
    position: 'absolute',
    margin: '0',
    right: '0',
    top: '-7px',
    fontSize: '1.4rem',
  },
  selector: {
    display: 'flex',
    margin: '0',
    backgroundColor: '#999',
    button: {
      padding: '5px',
      backgroundColor: '#999',
      color: '#fff',
    },
    buttonActive: {
      padding: '5px',
      backgroundColor: '#fff',
    },
  },
  panels: {
    panel: {
      display: 'none',
      padding: '10px',
      // backgroundColor: '#999',
      // color: '#fff',
    },
    panelActive: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      // backgroundColor: '#fff',
    },
  },
};


class ContentDisplay extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      data: this.props.data,
    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {

    const { data } = this.state;
    data[0].active = true;
    this.setState({ data });

  }

  handleClick(event) {

    const root = event.target.getAttribute('datatype');
    // const state = this.state;
    const data = this.state[root];
    const targetName = event.target.name;

    for (let i = 0, l = data.length; i < l; i += 1) {

      if (data[i].name === targetName) {

        data[i].active = true;

      } else {

        data[i].active = false;

      }

    }

    this.setState({ data });

  }

  render() {

    return (
      <div className="pageSection" style={style.root}>
        {
          this.props.title &&
          <h1 style={style.title}>{ this.props.title }</h1>
        }
        <Selector
          {...this.state}
          style={style.selector}
          handleClick={this.handleClick}
        />
        <Panels
          {...this.state}
          style={style.panels}
          {...this.state}
        />
      </div>
    );

  }
}


ContentDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ContentDisplay.defaultProps = {
};


export default ContentDisplay;
