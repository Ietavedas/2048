import {getRandom} from './helper.js';

class Probability{
    constructor(){
        this.probabilityState = [2, 2, 2, 2, 2, 2, 2, 2, 2, 4];
    }

    getRamdomValue(){
        let probabilityState = this.probabilityState;

        let countValues = probabilityState.length - 1;
        let randomValue = getRandom(0, countValues);

        this.removeFromState(randomValue);
        // console.log(probabilityState.indexOf(7));
        // console.log(this.probabilityState);

        return probabilityState[randomValue];
    }

    removeFromState(value){
        this.probabilityState.splice(value + 1, 1);
    }
}

export default Probability;