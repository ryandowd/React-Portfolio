import TimelineCardVisibilityWrapper from "../TimelineCardVisibilityWrapper";

import "./Timeline.scss";

type TimeLineCardArray = {
  description: string;
  endDate: string;
  location: string;
  logoImage: string;
  startDate: string;
  techlist: Array<string>;
  title: string;
  index: number;
};

type TimeLineProps = {
  timelineCardData: {
    timelineCards: TimeLineCardArray[];
  } | null;
};

const Timeline = (props: TimeLineProps) => {
  const cards = props?.timelineCardData?.timelineCards;

  return (
    <div className="Timeline">
      {cards?.map((timeLineCard: any, index: number) => {
        const {
          description,
          endDate,
          location,
          logoImage,
          startDate,
          techlist,
          title,
        }: TimeLineCardArray = timeLineCard;

        const uniqueId = `${title
          .toLowerCase()
          .replace(/[^a-z0-9]+/gi, "")}-${index}`;
        const addJoinerLine = index !== 0;

        return (
          <TimelineCardVisibilityWrapper
            key={uniqueId}
            cardId={uniqueId}
            logoImage={logoImage}
            startDate={startDate}
            endDate={endDate}
            title={title}
            location={location}
            description={description}
            techlist={techlist}
            addJoinerLine={addJoinerLine}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
