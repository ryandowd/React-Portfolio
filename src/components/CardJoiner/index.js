import React from 'react';

import './CardJoiner.scss';

const CardJoiner = (props) => {
    const { cardId, endDate } = props;
    return (
        <div className={'Card__joiner'} key={cardId + '_joiner'}>
            <div className="Card__joiner-date">{endDate}</div>
        </div>
    )
}

export default CardJoiner;