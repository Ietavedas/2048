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

    handleClick(event){
        event.stopPropagation();
        console.log(`x: ${event.clientX}`)
        console.log(`y: ${event.clientX}`)
        
        this.container.addEventListener('mouseup', function(event){
            event.stopPropagation();
            console.log(`x: ${event.clientX}`)
            console.log(`y: ${event.clientX}`)
        }, true)
    }
}

export default View;