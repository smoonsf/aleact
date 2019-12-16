const createComponent = (elementType, id, className, children = []) => {
    return {
        elementType,
        id,
        className,
        children,
    }
}

export default createComponent;
