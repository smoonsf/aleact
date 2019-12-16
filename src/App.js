import { createComponent } from './aleact/index.js';

import Header from './Header.js';
import Content from './Content.js';

const App = createComponent(
    'div',
    [['id', 'wrapper'], ['class', 'container']],
    [],
    [
        Header,
        Content,
    ],
    {},
);

export default App;
