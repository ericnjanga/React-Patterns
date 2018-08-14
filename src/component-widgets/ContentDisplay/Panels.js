import React from 'react';
import PropTypes from 'prop-types';

const Panels = ({
  data,
  style,
}) => {

  return (
    <section style={style}>
      {
        data.map(({ name, value, active }) => {
          return (
            <div
              key={name}
              style={ active ? style.panelActive : style.panel }
            >
              { value() }
            </div>
          );
        })
      }
    </section>
  );

};


Panels.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  style: PropTypes.shape({}),
};

Panels.defaultProps = {
  style: PropTypes.shape({}),
};


export default Panels;
