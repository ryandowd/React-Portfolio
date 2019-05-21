import React, { Component } from 'react';

import TimelineCard from "../../containers/TimelineCard/TimelineCard";

import "./Timeline.scss";

class Timeline extends Component {

  render () {

    let timelineCards = Object.keys(this.props.timelineCardData)
      .map( cardKey => {
        return [...Array(this.props.timelineCardData[cardKey])].map(() => {
          return (
            <TimelineCard
              key={cardKey}
              logoImage={this.props.timelineCardData[cardKey].logoImage}
              startDate={this.props.timelineCardData[cardKey].startDate}
              endDate={this.props.timelineCardData[cardKey].endDate}
              title={this.props.timelineCardData[cardKey].title}
              location={this.props.timelineCardData[cardKey].location}
              description={this.props.timelineCardData[cardKey].description}
              techlist={this.props.timelineCardData[cardKey].techlist}
              cardKey={cardKey}/>
            );
        } );
      } );

    return (
      <div className="Timeline">
          {timelineCards}
      </div>
    );
  }
}

export default Timeline;
