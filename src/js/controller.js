import {EventEmitter} from './helper.js';

class Controller extends EventEmitter{
    constructor(view, model){
        super();
        this.view = view;
        this.model = model;
        // console.log(this.on());

       this.loadReady();

    //    this.view.on('up', this.handleCalculate.bind(this, 'up'))
    //    this.view.on('down', this.handleCalculate.bind(this, 'down'))
    //    this.view.on('left', this.handleCalculate.bind(this, 'left'))
    //    this.view.on('right', this.handleCalculate.bind(this, 'right'))
    }

    loadReady(){
        const coord = this.view.getCoordinateGrid();
        const stateGrid = this.model.setStateGrid(coord);
        const randomThing = this.model.getRandomThing(stateGrid);

        this.model.setThing(randomThing);

        // this.view.renderThing(randomThing);
    }

    handleCalculate(type){
        // this.type = type;
        // console.log(this.type)
        this.model.test(type);

        const randomThing = this.model.getRandomThing(this.model.stateGrid);

        this.model.setThing(randomThing);
        this.view.renderThing(randomThing);
    }
    
}

export default Controller;