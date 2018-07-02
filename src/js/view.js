class View{
    constructor(){
        this.grid = document.querySelectorAll('.back');
        this.container = document.getElementById('playfield');

        // this.getCoordinateGrid()
        this.container.addEventListener('mousedown', this.handleClick.bind(this));

    }

    getCoordinateGrid(){
        // this.grid = grid;
        // console.log()
        const coordanates = [];
        for(let i = 0; i < this.grid.length; i++){
            let y = parseInt(getComputedStyle(this.grid[i], null).getPropertyValue('top'));
            let x = parseInt(getComputedStyle(this.grid[i], null).getPropertyValue('left'));
            // console.log({x, y});
            coordanates.push({x, y});
            
        }
        // console.log(coordanates)
        return coordanates
    }

    renderThing(obj){
        this.container.insertAdjacentHTML('beforeend', `<div class="thing t${obj.value}" style="top: ${obj.yCoord}px; left: ${obj.xCoord}px;"></div>`)
    }

    handleClick(eventX){
        // event.stopPropagation();
        // event.stopImmediatePropagation();
        // console.log(`x: ${eventX.clientX}`)
        // console.log(`y: ${event.clientY}`)
        let downClickX = eventX.clientX;
        let downClickY = eventX.clientY;
        
        this.container.addEventListener('mouseup', this.mouseupListerner.bind(downClickX, downClickY, this), false);
        this.container.removeEventListener('mouseup', this.mouseupListerner.bind(this), false);
        console.dir(this.container)
    }

    mouseupListerner(x, y, event){
        let upClickX = event.clientX;
        let upClickY = event.clientY;
        console.log(event)
        // let xResult = upClickX - x;
        // let yResult = upClickY - y;

        // console.log(x)
        // console.log(upClickX)
        // console.log(xResult)

        // if( xResult < 0){
        //     xResult = xResult * -1;
        //     // console.log(xResult)
        // }
    }


}

export default View;