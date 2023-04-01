import PlayerControl from "./PlayerControl";
import btnPrev from "./img/icon/prev.svg";
import btnPlay from "./img/icon/play.svg";
import btnNext from "./img/icon/next.svg";
import btnRepeat from "./img/icon/repeat.svg";
import btnShuffle from "./img/icon/shuffle.svg";
import iconNote from "./img/icon/note.svg";
import btnLike from "./img/icon/like.svg";
import btnDislike from "./img/icon/dislike.svg";
import iconVolume from "./img/icon/volume.svg";

function BarBlock() {
  return (
    <div className="bar">
      <div className="bar__content">
        <PlayerProgress />
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
          </div>
          <TrackPlayControls />
          <LikeDislike />
          <Volume />
        </div>
      </div>
    </div>
  );
}

function PlayerProgress() {
  return <div className="bar__player-progress"></div>;
}

function PlayerControls() {
  return (
    <div className="player__controls">
      <PlayerControl
        itemClass="player__btn-prev"
        imgClass="player__btn-prev-svg"
        imgSrc={btnPrev}
        imgAlt="prev"
      />
      <PlayerControl
        itemClass="player__btn-play"
        imgClass="player__btn-play-svg"
        imgSrc={btnPlay}
        imgAlt="play"
      />
      <PlayerControl
        itemClass="player__btn-next"
        imgClass="player__btn-next-svg"
        imgSrc={btnNext}
        imgAlt="next"
      />
      <PlayerControl
        itemClass="player__btn-repeat"
        imgClass="player__btn-repeat-svg"
        imgSrc={btnRepeat}
        imgAlt="repeat"
      />
      <PlayerControl
        itemClass="player__btn-shuffle"
        imgClass="player__btn-shuffle-svg"
        imgSrc={btnShuffle}
        imgAlt="shuffle"
      />
    </div>
  );
}

function TrackPlayControls() {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <PlayerControl
          itemClass="track-play__image"
          imgClass="track-play__svg"
          imgSrc={iconNote}
          imgAlt="music"
        />
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        </div>
      </div>
    </div>
  );
}

function LikeDislike() {
  return (
    <div className="track-play__like-dis">
      <PlayerControl
        itemClass="track-play__like _btn-icon"
        imgClass="track-play__like-svg"
        imgSrc={btnLike}
        imgAlt="like"
      />
      <PlayerControl
        itemClass="track-play__dislike _btn-icon"
        imgClass="track-play__dislike-svg"
        imgSrc={btnDislike}
        imgAlt="dislike"
      />
    </div>
  );
}

function Volume() {
  return (
    <div className="bar__volume-block volume">
      <div className="volume__content">
        <PlayerControl
          itemClass="volume__image"
          imgClass="volume__svg"
          imgSrc={iconVolume}
          imgAlt="volume"
        />
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  );
}
export default BarBlock;
