import './Queue.scss'
import QueueHeader from "./QueueHeader/QueueHeader";
import PlayingNow from "./PlayingNow/PlayingNow";
import NextTrack from "./NextTrack/NextTrack";

function Queue() {
  return (
    <div className="Queue">
      Queue
      <QueueHeader/>
      <PlayingNow/>
      <NextTrack/>
    </div>
  )
}

export default Queue;