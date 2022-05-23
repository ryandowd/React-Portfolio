import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import TimelineCard from "../TimelineCard";

import "./TimelineCard.scss";

type TimelineCardVisibilityWrapperProps = {
  addJoinerLine: boolean;
  cardId: string;
  endDate: string;
  description: string;
  location: string;
  logoImage: string;
  startDate: string;
  techlist: Array<string>;
  title: string;
};

const TimelineCardVisibilityWrapper = (
  props: TimelineCardVisibilityWrapperProps
) => {
  const [cardIsVisible, setCardVisible] = useState<boolean>(false);
  const [cardIsClicked, setCardClicked] = useState<boolean>(false);
  const CARD_BOTTOM_OFFSET = 200;

  const onVisibleCard = (isVisible: boolean) =>
    isVisible && setCardVisible(true);
  const onCardClicked = () => setCardClicked(!cardIsClicked);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={onVisibleCard}
      offset={{ bottom: CARD_BOTTOM_OFFSET }}
    >
      <TimelineCard
        cardIsClicked={cardIsClicked}
        cardIsVisible={cardIsVisible}
        onCardClicked={onCardClicked}
        {...props}
      />
    </VisibilitySensor>
  );
};

export default TimelineCardVisibilityWrapper;
