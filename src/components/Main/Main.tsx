import "./Main.scss";
import Tabs from "./Tabs/Tabs";
import Recently from "./Recently/Recently";
import ForYou from "./ForYou/ForYou";

function Main() {
  return (
    <div className="Main">
      <div className="Main__wrapper">
        <div className="Main__flexContainer mb-4">
          <Tabs />
          <Recently />
        </div>
        <ForYou />
      </div>
    </div>
  );
}

export default Main;
