import {EventEmitter} from './helper.js';

class Controller extends EventEmitter{
    constructor(view, model){
        super();
        this.view = view;
        this.model = model;
        // console.log(this.on());

       this.loadReady();

       this.view.on('up', function(){console.log('up')})
       this.view.on('down', function(){console.log('down')})
       this.view.on('left', function(){console.log('left')})
       this.view.on('right', function(){console.log('right')})
    }

    loadReady(){
        const coord = this.view.getCoordinateGrid();
        const stateGrid = this.model.setStateGrid(coord);
        const randomThing = this.model.getRandomThing(stateGrid);

        this.model.setThing(randomThing);

        this.view.renderThing(randomThing);
    }
    
}

export default Controller;