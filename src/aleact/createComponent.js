const createComponent = (elementType, attrs = [], eventListeners = [], children = [], state) => {
    return {
        elementType,
        eventListeners,
        attrs,
        children,
        state,
    }
}

export default createComponent;
