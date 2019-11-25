const parser = (virtualDom) => {
    const {
        elementType,
        id,
        className,
        children = [],
    } = virtualDom;

    const dom = document.createElement(elementType, {});
    id && dom.setAttribute('id', id);
    className && dom.setAttribute('class', className);

    for (const child of children) {
        const childDom = typeof child === 'string' ? document.createTextNode(child) : parser(child);
        
        dom.appendChild(childDom);
    }

    return dom;
}

export default parser;