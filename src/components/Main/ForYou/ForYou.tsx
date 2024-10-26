import React from "react";
import './ForYou.scss'
import { user } from "../../../data";
import YourMix from "./YourMix/YourMix";

const ForYou:React.FC = () => {
  return (
    <div className="ForYou">
      <h2 className="ForYou__header">Специально для тебя, {user.firstName}</h2>
      <YourMix />
    </div>
  )
}

export default ForYou;