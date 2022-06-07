export const toggleClass = (target: Element, className: string) => {
  target.classList.contains(className) ? target.classList.remove(className) : target.classList.add(className);
};

export const toggleAttr = (target: Element, attrName: string) => {
  target.getAttribute(attrName) === 'true'
    ? target.setAttribute(attrName, 'false')
    : target.setAttribute(attrName, 'true');
};
