import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'

class Profile extends Component {
  render() {

    const { repoFetch } = this.props;

    // Request 1 ...
    if (repoFetch.pending) {
      return <LoadingAnimation/>
    } else if (repoFetch.rejected) {
      return <Error error={repoFetch.reason}/>
    } else if (repoFetch.fulfilled) {
      return <User user={repoFetch.value}/>
    }

    // Request 2 ...
    // ...

  }
}

export default connect(props => ({
  repoFetch: `https://api.github.com/users/${username}/repos`
}))(Profile);