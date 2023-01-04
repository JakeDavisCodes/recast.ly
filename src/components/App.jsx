import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import SearchYouTube from '../lib/searchYouTube.js';

const { useState, useEffect } = React;

const App = (props) => {

  const [video, setVideo] = useState(exampleVideoData[0]);
  const [videos, setVideos] = useState([]);

  const searchHandler = (search) => {
    let query = search.target.value;
    console.log(query);
    SearchYouTube(query, (videos) => {
      setVideos(videos);
    });
  };

  console.log(videos);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <em><Search searchHandler = {searchHandler}/></em>
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