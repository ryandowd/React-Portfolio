import React from "react";
import classnames from "classnames";

import CardContent from "../CardContent";
import CardJoiner from "../CardJoiner";

type TimelineCardProps = {
  cardIsClicked: boolean;
  cardIsVisible: boolean;
  onCardClicked: React.MouseEventHandler<HTMLElement>;
  addJoinerLine: boolean;
  cardId: string;
  endDate: string;
  logoImage: string;
  title: string;
  startDate: string;
  location: string;
  techlist: Array<string>;
  description: string;
};

const TimelineCard = (props: TimelineCardProps) => {
  const {
    cardIsClicked,
    cardIsVisible,
    onCardClicked,
    addJoinerLine,
    cardId,
    endDate,
  } = props;
  let cardClasses: Array<string> = [];

  cardClasses = [
    ...(cardIsClicked ? ["js-expand-card"] : []),
    ...(cardIsVisible ? ["js-show-card"] : []),
  ];

  return (
    <div className={classnames(["TimelineCard__container", cardClasses])}>
      {addJoinerLine && <CardJoiner cardId={cardId} endDate={endDate} />}
      <CardContent
        cardClickedHandler={onCardClicked}
        cardClicked={cardIsClicked}
        {...props}
      />
    </div>
  );
};

export default TimelineCard;
