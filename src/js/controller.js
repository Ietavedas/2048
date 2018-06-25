class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
        // console.log(event.type);

       this.loadReady();
    }

    loadReady(){
        const coord = this.view.getCoordinateGrid();
        // console.log(coord);
        // this.view.getCoordinateGrid()
        this.model.setStateGrid(coord)
    }
}

export default Controller;