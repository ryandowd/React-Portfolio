import React from 'react';

import TimelineCard from "../TimelineCard";

import "./Timeline.scss";

const Timeline = ({ timelineCardData: { timelineCards } }) => {

  // let timelineCards = Object.keys(props.timelineCardData.timelineCards)
  // .map( index => {
  //   return [...Array(props.timelineCardData.timelineCards[index])].map(card => {
  //     let key = card.title.toLowerCase().replace(/[^a-z0-9]+/gi, '');
  //     console.log(card.logoImage, 'card.logoImage')
  //     return (
  //         <TimelineCard
  //           key={key}
  //           cardId={key}
  //           logoImage={card.logoImage}
  //           startDate={card.startDate}
  //           endDate={card.endDate}
  //           title={card.title}
  //           location={card.location}
  //           description={card.description}
  //           techlist={card.techlist}
  //           cardIndex={index}/>
  //       );
  //   } );
  // } );

  return (
    <div className="Timeline">
      {timelineCards.map((card, index) => {
        const key = `${card.title.toLowerCase().replace(/[^a-z0-9]+/gi, '')}-${index}`;
        return (
          <TimelineCard
            key={key}
            cardId={key}
            logoImage={card.logoImage}
            startDate={card.startDate}
            endDate={card.endDate}
            title={card.title}
            location={card.location}
            description={card.description}
            techlist={card.techlist}
            cardIndex={index}/>
        );
      })}
    </div>
  );
}

export default Timeline;
