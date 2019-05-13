import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './TimelineCard.scss';
import TimelineCardImage from "./TimelineCardImage/TimelineCardImage";

class TimelineCard extends Component {

  state = {
    cardVisible: false,
    cardClicked: false
  };

  // Callback from 'VisibilitySensor'. Used in 'itemIsVisible' to add 'js-show-item' class
  onVisibleCard = ( isVisible ) => {
    if (isVisible) {
      this.setState({ cardVisible: true });
    }
  };

  onCardClicked = ( e ) => {
    if (this.state.cardClicked) {
      this.setState({ cardClicked: false });
    } else {
      this.setState({ cardClicked: true });
    }
  };

  render () {

    let classes = [];
    let cardImageSrc = this.props.logoImage.toLowerCase() + '-logo.png';
    let logoImage = require('../../assets/images/' + cardImageSrc);
    let offset = 350;

    // Toggle classes for 'show' or 'expand'
    if (this.state.cardVisible && this.state.cardClicked) {
      classes = ['js-expand-card', 'js-show-card'];
    } else if (this.state.cardVisible) {
      classes = ['js-show-card'];
    }

    // Main timeline fragment
    let timelineCard = (
      <article className="TimelineCard__stack" onClick={(e) => this.onCardClicked(e)}>
        <div className={'TimelineCard TimelineCard__top-card'}>
          <TimelineCardImage logoImage={logoImage}/>
          <div className='TimelineCard__content'>
            <div className="TimelineCard__title">{this.props.title}</div>
            <div className="TimelineCard__dates">{this.props.startDate} - {this.props.endDate}</div>
            <div className="TimelineCard__location">{this.props.location}</div>
          </div>
        </div>
        <div className="TimelineCard TimelineCard__bottom-card">
          <p className="TimelineCard__spiel">{this.props.spiel}</p>
        </div>
      </article>
    );

    // The 'joiner' for each item (i.e. the black line with end-date
    // which joins the timeline items from top to bottom)
    let cardJoiner = (
      <div className={'TimelineCard__joiner'}>
        <div className="TimelineCard__end-date">{this.props.endDate}</div>
      </div>
    );

    // Add the timeline card joiner to all items except the first item
    if (parseInt(this.props.cardKey) !== 1) {
      timelineCard = [cardJoiner, timelineCard];
    }

    return (
      <VisibilitySensor
          partialVisibility={true}
          onChange={this.onVisibleCard}
          offset={{bottom: offset}}
      >
        <div className={'TimelineCard__container ' + classes.join(' ')}>
          {timelineCard}
        </div>
      </VisibilitySensor>
    );
  };

}

export default TimelineCard;
