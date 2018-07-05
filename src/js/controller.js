import {EventEmitter, toObject} from './helper.js';

class Controller extends EventEmitter{
    constructor(view, model){
        super();
        this.view = view;
        this.model = model;
        // console.log(this.on());

       this.loadReady();

       this.view.on('up', this.handleCalculate.bind(this, 0))
       this.view.on('right', this.handleCalculate.bind(this, 1))
       this.view.on('down', this.handleCalculate.bind(this, 2))
       this.view.on('left', this.handleCalculate.bind(this, 3))
       
    }

    loadReady(){
        const coord = this.view.getCoordinateGrid();
        const stateGrid = this.model.setStateGrid(coord);
        const randomThing = this.model.getRandomThing(stateGrid);

        this.model.setThing(randomThing);

        this.view.renderThing(randomThing);

        this.view.selectors.push(this.view.renderThing(randomThing));

        

    }

    handleCalculate(type){
        this.type = type;
        
        const vector = this.model.getVector(this.type)
        console.log(this.view.thingCell)
        this.model.test(vector);

        const randomThing = this.model.getRandomThing(this.model.stateGrid);

        this.view.moveThing(this.model.stateThing);

        let parser = new DOMParser();
        let doc = parser.parseFromString('<div class"thing"></div>', "text/html");
        let paragraphs = doc.querySelectorAll('.thing');

        console.log(paragraphs)

        this.model.setThing(randomThing);
        this.view.renderThing(randomThing);
    }
    
}

export default Controller;