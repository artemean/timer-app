import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'foundation-sites/dist/css/foundation.css';
import './index.css';

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById('root'));

registerServiceWorker();
