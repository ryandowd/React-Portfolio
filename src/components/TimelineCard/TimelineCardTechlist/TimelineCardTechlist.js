import React from 'react';
import { getImage } from '../../../shared/utility';

import './TimelineCardTechlist.scss';

const timelineCardTechlist = ( props ) => (
  <ul className="Techlist">
    {props.techlist.map(function(tech){
      return <li className="Techlist__item"><img src={getImage(tech, 'tech')}/></li>;
    })}
  </ul>
);

export default timelineCardTechlist;
