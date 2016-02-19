import React from 'react';
import ReactDOM from 'react-dom';

import t from 'agevio.js';

import Page from './page';

t.on('initialized', () => {
    ReactDOM.render(<Page />, document.getElementById('app'));
}).initialize({key: 'yjUQVeTWQOefZhPMydEfVQ', drawWidget: true});
