import _ from 'lodash';

import app from './App.js';
import { render } from './aleact/index.js';

const target = document.getElementById('app');

render(target, app);
