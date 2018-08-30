import React from 'react';
import PropTypes from 'prop-types';

/**
 *  SVG is just a template, and we can use the same Circle multiple times in our application, with various props.
 * @param {*} param0 
 */
const Circle = ({ x, y, radius, fill }) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
);

/**
 * In some cases, we prefer to be more strict and fix some values to keep consistency
 * @param {*} param0 
 */
export const RedCircle = ({ x, y, radius }) => (
  <Circle x={x} y={y} radius={radius} fill="red" />
);


Circle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  radius: PropTypes.number,
  fill: PropTypes.string,
};


Circle.defaultProps = {
  x: 30,
  y: 30,
  radius: 30,
  fill: 'green',
};


export default Circle;

