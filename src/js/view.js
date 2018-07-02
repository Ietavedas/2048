
import {EventEmitter} from './helper.js';

class View extends EventEmitter{
    constructor(){
        super();
        this.grid = document.querySelectorAll('.back');
        this.container = document.getElementById('playfield');

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
            let y = parseInt(getComputedStyle(this.grid[i], null).getPropertyValue('top'));
            let x = parseInt(getComputedStyle(this.grid[i], null).getPropertyValue('left'));
            // console.log({x, y});
            coordanates.push({x, y});
            
        }
        return coordanates
    }

    renderThing(obj){
        this.container.insertAdjacentHTML('beforeend', `<div class="thing t${obj.value}" style="top: ${obj.yCoord}px; left: ${obj.xCoord}px;"></div>`)
    }

    handleDown(event){
        this.posDown = [event.clientX, event.clientY];
    }

    handleUp(event){
        this.posUp = [event.clientX, event.clientY];
        this.getResultEmit(this.posDown, this.posUp);
    }

    getResultEmit(down, up){
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
        // console.log(yResult)
    }


}

export default View;