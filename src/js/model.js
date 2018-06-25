class Model{
    constructor(stateGrid = [], stateThing = []){
        this.stateGrid = stateGrid;
        this.stateThing = stateThing;
    }

    setStateGrid(coords){
        coords.map((item) => {
            this.stateGrid.push(item)
        })
        console.log(this.stateGrid);
    }
}

export default Model;