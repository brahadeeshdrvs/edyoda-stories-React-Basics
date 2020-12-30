import React from 'react';
import cardstyle from '../Css/Cards.module.css'

const Cards = ({url,title,author,courseDate,courseDetails}) => {
    
    return ( 
        <div className={cardstyle.Card}>
        <img className={cardstyle.Img} src={url} alt="card-image.png" />
        <div className={cardstyle.TextSection}>
            <h3 className={cardstyle.Heading}>{title}</h3>
            <span className={cardstyle.Author}>{author}</span>
            <span className={cardstyle.Date}>{` | ${courseDate}`}</span>
            <p className={cardstyle.Description}>{courseDetails}</p>
        </div>
    </div>
        
    );
}
 
export default Cards