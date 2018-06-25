class Model{
    constructor(stateGrid = [], stateThing = []){
        this.stateGrid = stateGrid;
        this.stateThing = stateThing;
    }

    //set grid's model
    setStateGrid(coords){
        coords.map((item) => {
            this.stateGrid.push(this.objectDefault(item.x, item.y, null))
        })
        console.log(this.stateThing);
        return this.stateGrid;
    }

    setThing(randomObject){
        this.randomObject = randomObject;
        this.stateThing.push(this.randomObject);
    }

    //base object for grid's model
    objectDefault(x, y, value){
        return (
            {
                xCoord: x,
                yCoord: y,
                value: value
            }
        )
    }

    //return random object for thing's model
    getRandomThing(grid){
        this.grid = grid;
        let availableObjects = [];

        for(let i=0; i < this.grid.length; i++){
            if(this.grid[i].value == null){
                availableObjects.push(this.grid[i]);
            }
        }
        let randomObject = availableObjects[this.getRandom(0, availableObjects.length - 1)];
        console.log(randomObject.value)
        return randomObject
    }

    //вынести в хелпер
    getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Model;