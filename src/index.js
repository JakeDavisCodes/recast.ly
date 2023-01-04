import App from './components/App.js';
import SearchYouTube from './lib/searchYouTube.js';
ReactDOM.render(<App searchYoutube = {SearchYouTube}/>, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));