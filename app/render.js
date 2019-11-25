import parser from './parser.js';

const render = (targetElement, virtualDom) => {
    targetElement.appendChild(parser(virtualDom));
}

export default render;
