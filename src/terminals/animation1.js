import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Animation1 = () => {

  return (

    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>Fading at Initial Mount</h1>
    </ReactCSSTransitionGroup>

    // <ReactCSSTransitionGroup
    //   transitionName="fade"
    //   transitionAppear
    //   transitionAppearTimeout={500}
    // >
    //   <h1>Fading text</h1>
    // </ReactCSSTransitionGroup>
  );

};

export default Animation1;
