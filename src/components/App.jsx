import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
const { useState } = React;

const App = () => {

  const [videos, setVideos] = useState([]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <h5>
              <em><Search /></em> view goes here
            </h5>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <em><VideoPlayer video = {videos[0]}/></em> view goes here
            </h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5>
              <em><VideoList videos = {videos} /></em> view goes here
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
