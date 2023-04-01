import iconWatch from "./img/icon/watch.svg";

function TitleModule() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <img className="playlist-title__svg" src={iconWatch} alt="watch" />
      </div>
    </div>
  );
}

export default TitleModule;
