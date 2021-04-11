import React from 'react';

import './CardImage.scss';

const CardImage = ( props ) => (
    <div className="Card__bannerImg">
      <img src={props.logoImage} />
    </div>
);

export default CardImage;
