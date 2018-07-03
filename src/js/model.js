import Probability from './probability.js';
import {getRandom, getCompareX} from './helper.js';

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

    test(type){
        if(type == 'up'){
            // console.log(this.stateGrid[i].yCoord)
            // console.log(this.stateGrid.sort(getCompareX(a, b)))
            // console.log()
            // this.stateGrid.sort(function(a, b){
            //     return a.yCoord - b.yCoord;
            // })
            // this.stateGrid.reverse();
            for(let i = 0; i < 4; i++){
                // console.log(this.stateGrid[i])
                this.stateGrid.forEach( (element, index) => {
                    // let vector = [];
                    if(element.xCoord == i || element.xCoord == i + '00'){
                        let xVal = index;
                        console.log(xVal)
                        for(let j = 0; j < 4; j++){
                            // if(element.yCoord == j+1 || element.yCoord == j+1 + '00' ){
                            //     console.log(xVal)
                            //     let yVal = element.value;
                            //     // console.log(xVal)
                            // }
                            
                            // console.log(element[j].value + element[j+1].value)

                            
                        }
                        
                        // if(element.yCoord == j || element.yCoord == j + '00' ){
                                
                        // }
                        // vector.push(element)
                        // vector.forEach( (el) => {
                        //     console.log(el.value)
                        //     if(el.value != null || undefined){
                        //         if()
                        //     }
                        // })
                    }
                    // console.log(vector)
                } )
                console.log("___")
            }
        }
        // for(let i = 0; i < this.stateGrid.length; i++){
        //     console.log(this.stateGrid[i].yCoord)
        // }
    }
}

export default Model;