import _ from 'lodash';

const parser = (virtualDom) => {
    const {
        elementType,
        attrs = [],
        eventListeners = [],
        children = [],
        state,
    } = virtualDom;

    const dom = document.createElement(elementType, {});
    dom.state = state;
    dom.setState = (newState) => {
        dom.state = {
            ...dom.state,
            ...newState
        };
    }
    
    for (const [attrName, attrValue] of attrs) {
        dom.setAttribute(attrName, attrValue);
    }

    for (const [eventName, listener] of eventListeners) {
        dom.addEventListener(eventName, listener);
    }

    for (const child of children) {
        const childDom = typeof child === 'string' ? document.createTextNode(_.template(child)(state)) : parser(child);
        
        dom.appendChild(childDom);
    }

    return dom;
}

export default parser;