import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import classes from './Timeline.css';

class Timeline extends Component {

  render () {

    let timelineItemsList = Object.keys(this.props.timelineItems)
      .map( itemKey => {
        console.info(this.props.timelineItems);
        return [...Array(this.props.timelineItems[itemKey])].map(( _, i ) => {
          return <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                    <ul className="timeline__item">
                      <li>{this.props.timelineItems[itemKey].Date}</li>
                      <li>{this.props.timelineItems[itemKey].Title}</li>
                      <li>{this.props.timelineItems[itemKey].Location}</li>
                    </ul>
                  </VerticalTimelineElement>;
        } );
      } )
      .reduce(( arr, el ) => {
        return arr.concat(el);
      }, []);

    return (
      <VerticalTimeline>
        {timelineItemsList}
      </VerticalTimeline>
    );
  };
}

export default Timeline;

{/*<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>*/}
