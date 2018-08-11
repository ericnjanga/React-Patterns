import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {


  console.log('....===', typeof error);

  return (
    <div style={{ background: 'red', padding: '10px', color: '#fff' }}>
      { error }
    </div>
  );

};

Error.propTypes = {
  error: PropTypes.shape({}).isRequired,
};

export default Error;
