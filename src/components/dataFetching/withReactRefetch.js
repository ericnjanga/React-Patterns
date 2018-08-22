import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-refetch';
import LoadingAnimation from './../utilities/LoadingAnimation.js';
import Error from './../utilities/Error.js';

import List from './../lists/List.js';
import { withLimeStyle } from './../../utilities/hoc/withClass.js';


/**
 * Component which fetches any root directory of a user's GitHub profile
 * - Using "react-refetch" connect object to fetch data
 * - "Example of fetching data in a GitHub API"
 *
 * @repoFetch: PromiseState object containing query results (promise utility object from connect)
 */


const GitProfile1 = (props) => {

  const { repoFetch } = props;
  // console.log('....', repoFetch );

  // Request 1 ...
  if (repoFetch.pending) {

    return <LoadingAnimation />;

  } else if (repoFetch.rejected) {
    // console.log('....', repoFetch.reason);

    return <Error error={repoFetch.reason} />;

  } else if (repoFetch.fulfilled) {

    // Get the component list with blue style
    const LimeStyleList = withLimeStyle(List);
    return <LimeStyleList data={repoFetch.value} />;

  }

  return false;

};

/**
 * Enforcing property validation
 */
GitProfile1.propTypes = {
  repoFetch: PropTypes.shape().isRequired,
};


export default connect(({ username, root }) => ({

  repoFetch: `https://api.github.com/users/${username}/${root}`,

}))(GitProfile1);
