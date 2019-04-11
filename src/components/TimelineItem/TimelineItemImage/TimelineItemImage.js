import React from 'react';

import './TimelineItemImage.scss';

const TimelineItemImage = ( props ) => (
    <div className="TimelineItem__image">
      <img src={props.logoImage} />
    </div>
);

export default TimelineItemImage;
