const decode = (input) => {
  input = input.split('&#39;').join('\'');
  input = input.split('&quot;').join('\"');
  input = input.split('&amp;').join('&');
  return input;
};

var VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{decode(props.video.snippet.title)}</h3>
        <div>{decode(props.video.snippet.description)}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
