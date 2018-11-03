import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

ReactDOM.render(<App courseId={Math.floor(Math.random() * 100)}/>, document.getElementById('reviewModule'));
