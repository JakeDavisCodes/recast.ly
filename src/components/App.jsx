import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';


const { useState, useEffect } = React;

const App = (props) => {

  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);
  console.log('this is what', props);

  useEffect(() => {
    setVideos(props.searchYouTube('cat', data => {
      for (let i = 0; i < data.length; i++) {
        setVideos(videos.concat([data[i]]));
      }
    }));
  });

  console.log(videos);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <em><Search /></em>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <em><VideoPlayer video={video}/></em>
        </div>
        <div className="col-md-5">
          <em><VideoList videos={videos} setVideo={setVideo}/></em>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;