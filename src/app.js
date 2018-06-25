import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(view, model);
})