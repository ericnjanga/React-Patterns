import React from 'react';
import { connect } from 'react-refetch';
import withData from './../components/hoc/withData.js';
import { withBlueStyle, withLimeStyle } from './../components/hoc/withClass.js';
import List from './../components/lists/List.js';

/**
 * The goal is to return a list of data with the blue style
 * ---------------
 */
// Get the component list with blue style
const BlueStyleList = withBlueStyle(List);

// Get the final component containing the list of repos and styled with blue
const BlueStyleListOfRepos = withData(props => `https://api.github.com/users/${props.username}/repos`)(BlueStyleList);


/**
 * Using "connect" object of react-fetch
 */
export const ConnectWithRepos = connect(({ username }) => ({
  data: `https://api.github.com/users/${username}/repos`,
}));


const DataFetching = () => {
  return <BlueStyleListOfRepos username="ericnjanga" />
}

export default DataFetching;
