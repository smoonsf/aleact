import parser from './parser.js';

const render = (targetElement, _virtualDom) => {
    let virtualDom = _virtualDom;

    const rerender = () => {
        targetElement.innerHTML = '';
        targetElement.appendChild(parser(virtualDom, rerender));
    }

    targetElement.appendChild(parser(virtualDom, rerender));
}

export default render;
