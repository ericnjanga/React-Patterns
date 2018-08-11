import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component which renders a data list in as a unordered list
 * 
 * @data: list
 * @className
 */
const List = ({ data: gists, className }) => (
  <ul className={`list ${className?className:''}`}>
    {
      gists.map(gist => (
        <li key={gist.id}>{gist.description}</li>
      ))
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};


export default List;
