function PlayerControl(props) {
  return(
    <div className={props.itemClass}>
        <img className={props.imgClass} src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
}

export default PlayerControl;
