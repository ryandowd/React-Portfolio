import React from 'react';
import { getImage } from '../../shared/utility';

import './CardTechlist.scss';

const CardTechlist = ( props ) => (
  <ul className="CardTechlist">
    {props.techlist.map(function(tech, key){
      return <li key={key} className="CardTechlist__item"><img src={getImage(tech, 'tech')}/></li>;
    })}
  </ul>
);

export default CardTechlist;
