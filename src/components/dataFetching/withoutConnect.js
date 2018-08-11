import React from 'react';
import { connect } from 'react-refetch';
import withData from './../hoc/withData.js';
import { withBlueStyle } from './../hoc/withClass.js';
import List from './../lists/List.js';


/**
 * Component which fetches any root directory of a user's GitHub profile
 * - Uses a "High-order Component" to connect object to query GitHub API
 * - Another HoC is initialy used to decorate a list component with specific
 * styles before passing it down to the one that will fetch data
 */


// Get the component list with blue style
const BlueStyleList = withBlueStyle(List);

// Get the final component containing the list of repos and styled with blue
const BlueStyleListOfRepos = withData(props => `https://api.github.com/users/${props.username}/repos`)(BlueStyleList);


const GitProfileNoConnect = () => {

  return (
    <BlueStyleListOfRepos
      username="ericnjanga"
      root="repos"
    />
  );

};

export default GitProfileNoConnect;
