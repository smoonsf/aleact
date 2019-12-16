import _ from 'lodash';

import { render, createComponent } from '../aleact';

const target = document.getElementById('app');

const app = createComponent('h1', undefined, 'title', [
    'ALEACT DEMO',
    createComponent('h2', undefined, undefined, [
        'child1',
        createComponent('h3', undefined, undefined, ['grandchild1']),
        createComponent('h3', undefined, undefined, ['grandchild2']),
        createComponent('h3', undefined, undefined, ['grandchild3']),
    ]),
    createComponent('h2', undefined, undefined, [
        'child2', 
        createComponent('h3', undefined, undefined, ['grandchild1']),
        createComponent('h3', undefined, undefined, ['grandchild1']),
        createComponent('h3', undefined, undefined, ['grandchild1']),
    ])
]);

render(target, app);
