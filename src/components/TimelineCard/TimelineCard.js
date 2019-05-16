import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { getImage } from '../../shared/utility';

import './TimelineCard.scss';
import TimelineCardImage from "./TimelineCardImage/TimelineCardImage";
import TimelineCardTechlist from "./TimelineCardTechlist/TimelineCardTechlist";

class TimelineCard extends Component {

  state = {
    cardVisible: false,
    cardClicked: false
  };

  // Callback from <VisibilitySensor>. Used in 'itemIsVisible' to add 'js-show-item' class
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
    const offset = 350;

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
          <div>
            <TimelineCardImage logoImage={getImage(this.props.logoImage, 'logo')} />
            <div className='TimelineCard__content'>
              <div className="TimelineCard__title">{this.props.title}</div>
              <div className="TimelineCard__dates">{this.props.startDate} - {this.props.endDate}</div>
              <ul className="TimelineCard__locations">
               {this.props.location}
              </ul>
            </div>
          </div>
          <div className="TimelineCard__techlist">
            { this.state.cardClicked ? <TimelineCardTechlist techlist={this.props.techlist} /> : '' }
          </div>
        </div>
        <div className="TimelineCard TimelineCard__bottom-card">
          <p className="TimelineCard__description">{this.props.description}</p>
        </div>
      </article>
    );

    // Create the 'joiner' for each timeline card (i.e. the black line with end-date
    // which joins the timeline cards from top to bottom)
    let cardJoiner = (
      <div className={'TimelineCard__joiner'}>
        <div className="TimelineCard__end-date">{this.props.endDate}</div>
      </div>
    );

    // Add the timeline card 'joiner' to all cards except the first item
    if (parseInt(this.props.cardKey.slice(-1)) !== 1) {
      timelineCard = [cardJoiner, timelineCard];
    }

    return (
      <VisibilitySensor
        partialVisibility={true}
        onChange={this.onVisibleCard}
        offset={{bottom: offset}}>
        <div className={'TimelineCard__container ' + classes.join(' ')}>
          {timelineCard}
        </div>
      </VisibilitySensor>
    );
  };

}

export default TimelineCard;
