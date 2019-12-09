import render from './render.js';
import generator from './generator.js';

const target = document.getElementById('app');

const virtualDomTree = generator('h1', undefined, 'title', [
    'ALEACT DEMO',
    generator('h2', undefined, undefined, [
        'child1',
        generator('h3', undefined, undefined, ['grandchild1']),
        generator('h3', undefined, undefined, ['grandchild2']),
        generator('h3', undefined, undefined, ['grandchild3']),
    ]),
    generator('h2', undefined, undefined, [
        'child2', 
        generator('h3', undefined, undefined, ['grandchild1']),
        generator('h3', undefined, undefined, ['grandchild1']),
        generator('h3', undefined, undefined, ['grandchild1']),
    ])
]);

render(target, virtualDomTree);
