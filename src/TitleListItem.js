import React from "react";
import ListToggle from "./ListToggle";
const TitleListItem = ({title, imageSrc,rating,overview}) => {

  return (
   <div className="Item" style={{backgroundImage: 'url(' + imageSrc + ')'}}>
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{rating} / 10</div>
        <div className="plot">{overview}</div>
        <ListToggle/>
        </div>
    </div>
  );
};

export default TitleListItem;
