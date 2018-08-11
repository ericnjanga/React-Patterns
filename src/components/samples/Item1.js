import React from 'react';
import PropTypes from 'prop-types';

const Item1 = ({ error }) => {

  return (
    <div style={{ background: 'red', padding: '10px', color: '#fff' }}>
      { error }
    </div>
  );

};

Item1.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Item1;
