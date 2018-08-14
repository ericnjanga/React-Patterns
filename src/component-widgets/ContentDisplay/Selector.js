import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({
  data,
  style,
  handleClick,
}) => {

  return (
    <ul style={style}>
      {
        data.map(({ title, name, active }) => {
          return (
            <li key={name}>
              <button
                name={name}
                datatype="data"
                style={ active ? style.buttonActive : style.button }
                onClick={handleClick}
              >
                {title}
              </button>
            </li>
          );
        })
      }
    </ul>
  );

};


Selector.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  style: PropTypes.shape({}),
  handleClick: PropTypes.func.isRequired,
};

Selector.defaultProps = {
  style: PropTypes.shape({}),
};


export default Selector;
