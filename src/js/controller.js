class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
        // console.log(event.type);

       this.loadReady();
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