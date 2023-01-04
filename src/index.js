import App from './components/App.js';
import SearchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App searchYoutube = {SearchYouTube.searchYouTube}/>, document.getElementById('app'));
