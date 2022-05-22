import React from 'react';

import './CardImage.scss';

type Props = {
  logoImage: string
}

const CardImage = ( props: Props ) => (
    <div className="Card__bannerImg">
      <img alt="company logo" src={props.logoImage} />
    </div>
)

export default CardImage;
