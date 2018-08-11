import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-refetch';
import LoadingAnimation from './../utilities/LoadingAnimation.js';
import Error from './../utilities/Error.js';

import List from './../lists/List.js';
import { withLimeStyle } from './../hoc/withClass.js';


/**
 * Component which fetches any root directory of a user's GitHub profile
 * - Uses "react-refetch" connect object to query GitHub API
 *
 * @repoFetch: promise object containing query results
 */


const GitProfile = (props) => {

  const { repoFetch } = props;

  // Request 1 ...
  if (repoFetch.pending) {

    return <LoadingAnimation />;

  } else if (repoFetch.rejected) {

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
GitProfile.propTypes = {
  repoFetch: PropTypes.shape().isRequired,
};


export default connect(({ username, root }) => ({

  repoFetch: `https://api.github.com/users/${username}/${root}`,

}))(GitProfile);
