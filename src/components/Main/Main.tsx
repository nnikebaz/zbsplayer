import React from "react";
import './Main.scss'
import Tabs from "./Tabs/Tabs";
import Promo from "./Promo/Promo";
import Recently from "./Recently/Recently";
import ForYou from "./ForYou/ForYou";

function Main() {
  return (
    <div className="Main">
      Main
      <Tabs/>
      <Promo/>
      <Recently/>
      <ForYou/>
    </div>
  )
}

export default Main;