import React from 'react';

import './CardImage.scss';

const CardImage = ( props ) => (
    <div className="Card__bannerImg">
      <img alt="company logo" src={props.logoImage} />
    </div>
);

export default CardImage;
