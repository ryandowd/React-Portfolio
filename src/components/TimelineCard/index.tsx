import { useState  } from 'react';
import classnames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import CardContent from "../CardContent";
import CardJoiner from "../CardJoiner";

import './TimelineCard.scss';

type Props = {
  cardIndex: string,
  cardId: number, 
  endDate: string 
}

const TimelineCard = (props: Props) => {
  const [ cardIsVisible, setCardVisible ] = useState<boolean>(false);
  const [ cardIsClicked, setCardClicked ] = useState<boolean>(false);
  const { cardIndex, cardId, endDate } = props;
  let cardClasses: Array<string> = [];
  const CARD_BOTTOM_OFFSET = 200;

  // Callback from <VisibilitySensor>. Used in 'itemIsVisible' to add 'js-show-item' class
  const onVisibleCard = (isVisible: boolean) => isVisible && setCardVisible(true);
  const onCardClicked = () => setCardClicked(!cardIsClicked);

  cardClasses = [
    ...(cardIsClicked ? ['js-expand-card'] : []),
    ...(cardIsVisible ? ['js-show-card'] : [])
  ]

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={onVisibleCard}
      offset={{bottom: CARD_BOTTOM_OFFSET}}>
      <div className={classnames(['TimelineCard__container', cardClasses])}>
        {parseInt(cardIndex) !== 0 && (
          <CardJoiner 
            cardId={cardId} 
            endDate={endDate} 
          />
        )}
        <CardContent
          onCardClicked={onCardClicked} 
          cardClicked={cardIsClicked}
          {...props}
        />
      </div>
    </VisibilitySensor>
  );
}

export default TimelineCard;
