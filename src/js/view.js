
import {EventEmitter} from './helper.js';

class View extends EventEmitter{
    constructor(){
        super();
        this.grid = document.querySelectorAll('.back');
        this.container = document.getElementById('playfield');

        this.selectors = [];

        this.posDown = null;
        this.posUp = null;

        // this.getCoordinateGrid()
        this.container.addEventListener('mousedown', this.handleDown.bind(this));
        this.container.addEventListener('mouseup', this.handleUp.bind(this));
        
    }

    getCoordinateGrid(){
        // this.grid = grid;
        const coordanates = [];
        for(let i = 0; i < this.grid.length; i++){
            let y = getComputedStyle(this.grid[i], null).getPropertyValue('top');
            let x = getComputedStyle(this.grid[i], null).getPropertyValue('left');
            y = parseInt(y.charAt(0))
            x = parseInt(x.charAt(0))
            // console.log({x, y});
            coordanates.push({x, y});
            
        }
        return coordanates
    }

    renderThing(obj){
        setTimeout( () => {
            this.container.insertAdjacentHTML('beforeend', `<div class="thing t${obj.value}" style="top: ${obj.position.y == 0 ? 0 : obj.position.y + "00"}px; left: ${obj.position.x == 0 ? 0 : obj.position.x + "00"}px;"></div>`)
        }, 300)
    }

    handleDown(event){
        this.posDown = [event.clientX, event.clientY];
    }

    handleUp(event){
        this.posUp = [event.clientX, event.clientY];
        this.getVector(this.posDown, this.posUp);
    }

    getVector(down, up){
        let xResult = up[0] - down[0];
        let yResult = up[1] - down[1];

        let xVector = Math.abs(xResult);
        let yVector = Math.abs(yResult);

        if(xVector >= yVector){
            if(xResult >= 0){
                this.emit('right', true);
            }else{
                this.emit('left', true);
            }
        }else{
            if(yResult >= 0) {
                this.emit('down', true);
            }else{
                this.emit('up', true);
            }
        }
    }

    moveThing(thing, doc){
        this.thing = thing;
        this.doc = doc;

        // console.log(this.thing)

        

        this.doc.forEach((element) => {
            let elementLeft = element.style.left;

            for(let i = 0; i < this.thing.length; i++){
                // this.thing[i].revios;
                let x = this.thing[i].previos.x == 0 ? 0 + "px" : this.thing[i].previos.x + "00px";
                // let left = x == elementLeft ? true : false;
                
                let xSet = this.thing[i].position.x == 0 ? 0 + "px" : this.thing[i].position.x + "00px";

                if(x == elementLeft){
                    element.style.left = xSet
                    console.log(xSet)
                }

                // console.log(x)
                // console.log(left)
            }
            
        });
        
    }


}

export default View;