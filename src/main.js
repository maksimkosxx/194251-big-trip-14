import routes from './view/routes.js';
import filters from './view/filter.js'
import sort from './view/sort.js'

const renderComponent = (container, template, place) => container.insertAdjacentHTML(place, template);


const routesContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const sortContainer = document.querySelector('.trip-events');

renderComponent(routesContainer, routes, 'afterbegin');
renderComponent(filterContainer, filters, 'beforeend');
renderComponent(sortContainer, sort, 'beforeend');
