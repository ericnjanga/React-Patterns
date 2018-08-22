import React from 'react';
import withData from './../../utilities/hoc/withData.js';
import { withBlueStyle } from '../../utilities/hoc/withClass.js';
import List from '../lists/List.js';


/**
 * Component which fetches any root directory of a user's GitHub profile
 * - Using a "High-order Component" to fetch data
 * - "Example of fetching data in a GitHub API"
 *
 * - Another HoC is initialy used to decorate a list component with specific
 * styles before passing it down to the one that will fetch data
 */


// Get the component list with blue style
const BlueStyleList = withBlueStyle(List);

// Get the final component containing the list of repos and styled with blue
const BlueStyleListOfRepos = withData(props => `https://api.github.com/users/${props.username}/repos`)(BlueStyleList);


const GitProfile2 = () => {

  return (
    <BlueStyleListOfRepos
      username="ericnjanga"
      root="repos"
    />
  );

};

export default GitProfile2;
