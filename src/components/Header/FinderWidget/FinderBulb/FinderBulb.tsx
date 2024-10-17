import React from "react";
import './FinderBulb.scss'
import SearchIcon from "./SearchIcon/SearchIcon";
import ReviewIcon from "./ReviewIcon/ReviewIcon";

const FinderBulb: React.FC = () => {
  return (
    <div className="FinderBulb">
      <SearchIcon/>
      <input placeholder="Что поставить брат?" id="SearchInput" className="FinderBulb__input"/>
      <ReviewIcon/>
    </div>
  )
}

export default FinderBulb;