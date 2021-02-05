import './footer.css';
const top = document.createElement('div');
const bottom = document.createElement('div');

const copyright = document.createElement('span');
copyright.textContent = '&copy; 2021';

top.appendChild(copyright);

export { top, bottom };
