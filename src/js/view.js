class View{
    constructor(){
        this.grid = document.querySelectorAll('.back');
        this.container = document.getElementById('playfield');

        // this.getCoordinateGrid()
    }

    getCoordinateGrid(){
        // this.grid = grid;
        // console.log()
        const coordanates = [];
        for(let i = 0; i < this.grid.length; i++){
            let y = getComputedStyle(this.grid[i], null).getPropertyValue('top');
            let x = getComputedStyle(this.grid[i], null).getPropertyValue('left');
            // console.log({x, y});
            coordanates.push({x, y});
            
        }
        // console.log(coordanates)
        return coordanates
    }
}

export default View;