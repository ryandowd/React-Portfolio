import React, { Component } from 'react';

import "./Timeline.scss";
import TimelineItem from "../TimelineItem/TimelineItem";

class Timeline extends Component {

    render () {

        let timelineItems = Object.keys(this.props.timelineItemData)
            .map( ingredientKey => {
                return [...Array(this.props.timelineItemData[ingredientKey])].map(() => {
                    return (
                        <TimelineItem
                            key={ingredientKey}
                            start_date={this.props.timelineItemData[ingredientKey].start_date}
                            end_date={this.props.timelineItemData[ingredientKey].end_date}
                            title={this.props.timelineItemData[ingredientKey].title}
                            location={this.props.timelineItemData[ingredientKey].location}
                            sensorOffset={this.props.timelineItemData[ingredientKey].sensorOffset}/>
                        );
                } );
            } );

        return (
            <div className="container">
                <div className="Timeline">
                    {timelineItems}
                </div>
            </div>
        );
    }
}

export default Timeline;
