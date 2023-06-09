var VideoListEntry = (props) => {
  const decode = (input) => {
    input = input.split('&#39;').join('\'');
    input = input.split('&quot;').join('\"');
    input = input.split('&amp;').join('&');
    return input;
  };

  return (
    <div className="video-list-entry media" onClick={() => { props.setVideo(props.video); }}>
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{decode(props.video.snippet.title)}</div>
        <div className="video-list-entry-detail">{decode(props.video.snippet.description)}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
