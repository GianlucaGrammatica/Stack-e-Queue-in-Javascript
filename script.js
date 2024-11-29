console.log("Abcia2 :D");

class Stack {
    BaseArray;
    Count = 0;

    constructor(){
        this.BaseArray = [];
        this.Count = 0;
    }

    Push(value){
        this.BaseArray.push(value);
        this.Count++;
    }

    Pop(){
        this.Count--;
        return this.BaseArray.pop();
    }

    Peak(){
        return this.BaseArray[this.BaseArray.length];
    }

    Clear(){
        this.BaseArray = [];
        this.Count = 0;
    }
}

class Queue {
    BaseArray;
    Count = 0;

    constructor(){
        this.BaseArray = [];
        this.Count = 0;
    }

    Enque(value){
        this.BaseArray.push(value);
        this.Count++;
    }

    Deque(){
        this.Count--;
        let toReturn = this.BaseArray[0];
        this.BaseArray = this.BaseArray.slice(1);

        return toReturn;
    }

    Peak(){
        return this.BaseArray[0];
    }

    Clear(){
        this.BaseArray = [];
        this.Count = 0;
    }
}