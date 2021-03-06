function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCompareX(a, b){
    return a.xCoord - b.xCoord;
}

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }

class EventEmitter {
	constructor(){
		this.events = {};
    }
    on(type, callback){
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg){
        if (this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
	
}

export { getRandom, EventEmitter, getCompareX, toObject };