import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {

  return (
    <div style={{ background: 'red', padding: '10px', color: '#fff' }}>
      { error }
    </div>
  );

};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
