import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './TimelineItem.scss';
import TimelineItemImage from "./TimelineItemImage/TimelineItemImage";

class TimelineItem extends Component {

  state = {
    itemVisible: false
  };

  // Callback from 'VisibilitySensor'. Used in 'itemIsVisible' to add 'js-show-item' class
  onVisibleItem = ( isVisible ) => {
    if (isVisible) {
      this.setState({ itemVisible: true });
    }
  };


  render () {

    let itemIsVisible = this.state.itemVisible ? ' js-show-item' : '';
    let itemImageSrc = this.props.logoImage.toLowerCase() + '-logo.png';
    let logoImage = require('../../assets/images/' + itemImageSrc);
    let offset = 450;

    // Main timeline fragment
    let timelineItem = (
      <div className={'TimelineItem' +  itemIsVisible}>
        <TimelineItemImage logoImage={logoImage}/>
        <div className='TimelineItem__content'>
          <div className="TimelineItem__title">{this.props.title}</div>
          <div className="TimelineItem__dates">{this.props.startDate} - {this.props.endDate}</div>
          <div className="TimelineItem__location">{this.props.location}</div>
        </div>
      </div>
    );

    // The 'joiner' for each item (i.e. the black line with end-date
    // which joins the timeline items from top to bottom)
    let itemJoiner = (
      <div className={'TimelineItem__joiner' +  itemIsVisible}>
        <div className="TimelineItem__end-date">{this.props.startDate}</div>
      </div>
    );

    // If the item is NOTE the 1st. Then add the itemJoiner to it's 'top'
    if (this.props.itemKey != 1) {
      timelineItem = [itemJoiner, timelineItem];
    }

    return (
      <VisibilitySensor
          partialVisibility={true}
          onChange={this.onVisibleItem}
          offset={{bottom: offset}}
      >
        <div>
          {timelineItem}
        </div>
      </VisibilitySensor>
    );
  };

}

export default TimelineItem;
