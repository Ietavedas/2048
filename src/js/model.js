// import Probability from './probability.js';
import {getRandom, getCompareX} from './helper.js';

class Model{
    constructor(stateGrid = [], stateThing = []){
        this.stateGrid = stateGrid;
        this.stateThing = stateThing;
        this.statePrevios = null;
        console.log(this.stateGrid);
        console.log(this.stateThing);
        
    }

    //base object for grid's model
    objectDefault(x, y, value){
        return {
            position: {
                x: x,
                y: y
            },
            value: value
        }
    }

    //set grid's model
    setStateGrid(coords){
        // console.log(coords)
        coords.map((item) => {
            this.stateGrid.push(this.objectDefault(item.x, item.y, null))
            // if(item)
        })
        // console.log(this.stateGrid)
        
        return this.stateGrid;
    }

    setThing(randomObject){
        this.randomObject = randomObject;
        this.stateThing.push(this.randomObject);
    }

    getRamdomValue(){
        return Math.random() < 0.9 ? 2 : 4
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
        // let zzz = JSON.parse(this.grid);
        // console.log(zzz[0])
        let randomObject = availableObjects[getRandom(0, availableObjects.length - 1)];
        randomObject.value = this.getRamdomValue();
        return randomObject
    }

    test(vector){
        // if(type == 'up'){
        // }
        // for(let i = 0; i < this.stateThing.length; i++){
        //     for(let x = 0; x < 4; x++){
        //         for(let y = 0; y < 4; y++){
        //             let cell = {x: this.stateThing[i].position.x, y: this.stateThing[i].position.y}
        //             console.log(cell)
        //         }
                
        //     }
        // }
        this.statePrevios = this.stateThing;
        this.stateThing = [];
        this.statePrevios.forEach( (element) => {
            if( element.position.x + vector.x && element.position.y + vector.y > -1){
                if(element.position.x + vector.x && element.position.y + vector.y < 4){
                    let cell = {position: {x: element.position.x + vector.x, y: element.position.y + vector.y}}
                    console.log(cell)
                    this.stateThing.push(cell)
                }
            }
        })
        // console.log("___")
        console.log(this.stateThing)
    }

    getVector(direction){
        let map = {
            0: { x: 0,  y: -1 }, // Up
            1: { x: 1,  y: 0 },  // Right
            2: { x: 0,  y: 1 },  // Down
            3: { x: -1, y: 0 }   // Left
          };
        
          return map[direction];
    }
}

export default Model;