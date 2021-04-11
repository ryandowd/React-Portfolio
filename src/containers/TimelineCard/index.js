import React, { Component } from 'react';
import classnames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import CardContent from "../../components/CardContent";
import CardJoiner from "../../components/CardJoiner";

import './TimelineCard.scss';

class TimelineCard extends Component {
  state = {
    cardVisible: false,
    cardClicked: false
  };

  // Callback from <VisibilitySensor>. Used in 'itemIsVisible' to add 'js-show-item' class
  onVisibleCard = isVisible => {
    this.setState({ cardVisible: isVisible });
  };

  // Callback to update state when TimelineCard is clicked 
  onCardClicked = () => {
    this.setState({ cardClicked: !this.state.cardClicked });
  };

  render () {
    let classes = [];
    const offset = 200;
    const { cardIndex, cardId, endDate } = this.props;
    const { cardClicked, cardVisible } = this.state;

    // Toggle classes for 'show' or 'expand'
    if (cardVisible && cardClicked) {
      classes = ['js-expand-card', 'js-show-card'];
    } else if (cardVisible) {
      classes = ['js-show-card'];
    }

    return (
      <VisibilitySensor
        partialVisibility={true}
        onChange={this.onVisibleCard}
        offset={{bottom: offset}}>
        <div className={classnames(['TimelineCard__container', classes])}>
          {parseInt(cardIndex) != 0 && (
            <CardJoiner 
              cardId={cardId} 
              endDate={endDate} 
            />
          )}
          <CardContent 
            onCardClicked={this.onCardClicked} 
            cardClicked={cardClicked}
            {...this.props}
          />
        </div>
      </VisibilitySensor>
    );
  };

}

export default TimelineCard;
