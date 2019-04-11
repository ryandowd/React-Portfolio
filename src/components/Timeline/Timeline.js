import React, { Component } from 'react';

import TimelineItem from "../TimelineItem/TimelineItem";
import Intro from "../../components/Intro/Intro";

import "./Timeline.scss";

class Timeline extends Component {

  render () {

    let timelineItems = Object.keys(this.props.timelineItemData)
      .map( itemKey => {
        return [...Array(this.props.timelineItemData[itemKey])].map(() => {
          return (
            <TimelineItem
              key={itemKey}
              logoImage={this.props.timelineItemData[itemKey].logoImage}
              startDate={this.props.timelineItemData[itemKey].startDate}
              endDate={this.props.timelineItemData[itemKey].endDate}
              title={this.props.timelineItemData[itemKey].title}
              location={this.props.timelineItemData[itemKey].location}
              itemKey={itemKey}/>
            );
        } );
      } );

    return (
      <div className="container">
        <Intro />
        <div className="Timeline">
            {timelineItems}
        </div>
      </div>
    );
  }
}

export default Timeline;
