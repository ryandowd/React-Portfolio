import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './TimelineItem.scss';

class TimelineItem extends Component {

  state = {
    visible: false
  };

  onChange = ( isVisible ) => {
    if (isVisible) {
      this.setState({ visible: true });
    }
  };

  render () {

    let visibilityClass = this.state.visible ? ' js-show-item' : '';
    let sensorOffset = this.props.SensorOffset;
    let itemImageSrc = this.props.title.toLowerCase() + '-logo.png';
    let logoImage = require('../../assets/images/' + itemImageSrc);

    return (
        <VisibilitySensor
            partialVisibility={true}
            onChange={this.onChange}
            offset={{bottom:sensorOffset}}
          >
          <div className={'TimelineItem' +  visibilityClass}>
            <img src={logoImage} />
            {this.props.start_date}
            {this.props.end_date}
            {this.props.title}
            {this.props.location}

          </div>
        </VisibilitySensor>
    );
  };

}

export default TimelineItem;
