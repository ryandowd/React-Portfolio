import React, { Component } from 'react';

import TimelineCard from "../../containers/TimelineCard/TimelineCard";

import "./Timeline.scss";

class Timeline extends Component {

  render () {

    let timelineCards = Object.keys(this.props.timelineCardData.timelineCards)
      .map( index => {
        return [...Array(this.props.timelineCardData.timelineCards[index])].map( card => {
          let key = card.title.toLowerCase().replace(/[^a-z0-9]+/gi, '');
          return (
              <TimelineCard
                key={key}
                id={key}
                logoImage={card.logoImage}
                startDate={card.startDate}
                endDate={card.endDate}
                title={card.title}
                location={card.location}
                description={card.description}
                techlist={card.techlist}
                cardIndex={index}/>
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
