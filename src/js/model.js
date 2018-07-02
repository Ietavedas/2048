import Probability from './probability.js';
import {getRandom} from './helper.js';

class Model extends Probability{
    constructor(stateGrid = [], stateThing = []){
        super();
        this.stateGrid = stateGrid;
        this.stateThing = stateThing;
        console.log(this.stateGrid);
        console.log(this.stateThing);
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

    //set grid's model
    setStateGrid(coords){
        coords.map((item) => {
            this.stateGrid.push(this.objectDefault(item.x, item.y, null))
        })
        return this.stateGrid;
    }

    setThing(randomObject){
        this.randomObject = randomObject;
        this.stateThing.push(this.randomObject);
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

        let randomObject = availableObjects[getRandom(0, availableObjects.length - 1)];
        randomObject.value = this.getRamdomValue();
        return randomObject
    }
}

export default Model;