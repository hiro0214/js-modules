import { toggleAttr } from '../utility/_toggle';

const attrName = 'data-accordion-active';
type FlagType = 'true' | 'false';

const toggleAccordion = (accordion: Element) => {
  const flag = accordion.getAttribute(attrName) as FlagType;
  const detail = accordion.querySelector('.c-accordion__detail') as HTMLElement;

  flag === 'true' ? detail.removeAttribute('style') : (detail.style.maxHeight = `${detail.scrollHeight}px`);
  toggleAttr(accordion, attrName);
};

export const initAccordion = () => {
  const accordions = document.querySelectorAll('.c-accordion');
  if (!accordions) return;

  accordions.forEach((accordion) => {
    const trigger = accordion.querySelector('.c-accordion__trigger') as HTMLElement;
    trigger.addEventListener('click', () => toggleAccordion(accordion));
  });
};
