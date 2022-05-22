import React from 'react';
import classnames from 'classnames';
import { getImage } from '../../shared/utility';

import CardImage from "../CardImage";
import CardTechlist from "../CardTechlist";

import './CardContent.scss';

// type Props = {
//     onCardClicked: , 
//     cardClicked,
//     cardId: number, 
//     logoImage: string, 
//     title: string, 
//     startDate: string, 
//     endDate: string, 
//     location: string,
//     techlist: string, 
//     description: string 
// }

const CardContent = (props) => {
    const { 
        onCardClicked, 
        cardClicked,
        cardId, 
        logoImage, 
        title, 
        startDate, 
        endDate, 
        location,
        techlist, 
        description 
    } = props;

    const showChecklistClass = cardClicked ? 'js-fadeIn' : '';

    return (
        <article className="Card__stack" onClick={onCardClicked} key={cardId}>
            <div className="Card Card__left">
            <header className="Card__header">
                <CardImage logoImage={getImage(logoImage, 'logo')} />
                <div className='Card__details'>
                    <h4 className="Card__title">{title}</h4>
                    <span className="Card__dates">{startDate} - {endDate}</span>
                    <ul className="Card__locations">
                        {location}
                    </ul>
                </div>
            </header>
            <div className={classnames(['CardTechlist__container', showChecklistClass])}>
                <CardTechlist techlist={techlist} />
            </div>
            </div>
            <div className="Card Card__right">
                <p className="Card__description">{description}</p>
            </div>
        </article>
    )
}

export default CardContent;