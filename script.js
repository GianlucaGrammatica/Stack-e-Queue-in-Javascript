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

    ToString(){
        let toReturn = "";
        for(let i = 0; i < this.Count; i++){
            toReturn += `${this.BaseArray[i]} `
        }

        return toReturn;
    }

    ToHTML(){
        let toReturn = ``;
        for(let i = 0; i < this.Count; i++){
            toReturn += `<h4 id="StackVisualizer" class="Element">${this.BaseArray[i]}</h4>`
        }

        return toReturn;
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

    ToHTML(){
        let toReturn = ``;
        for(let i = 0; i < this.Count; i++){
            toReturn += `<h4 id="StackVisualizer" class="Element">${this.BaseArray[i]}</h4>`
        }

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

let StackVisualizer = document.getElementById("StackVisualizer");
let InputStackAddButton = document.getElementById("InputStackAddButton");
let InputStackRemoveButton = document.getElementById("InputStackRemoveButton");
let StackInput = document.getElementById("StackInput");

let QueueVisualizer = document.getElementById("QueueVisualizer");
let InputQueueAddButton = document.getElementById("InputQueueAddButton");
let InputQueueRemoveButton = document.getElementById("InputQueueRemoveButton");
let QueueInput = document.getElementById("QueueInput");

let shtack = new Stack();
let ueque = new Queue();


InputStackAddButton.addEventListener("click", StackPush);
InputStackRemoveButton.addEventListener("click", StackPop);

InputQueueAddButton.addEventListener("click", QueuePush);
InputQueueRemoveButton.addEventListener("click", QueuePop);

function StackPush(){
    if(StackInput.value != ""){
        shtack.Push(StackInput.value);
        StackVisualizer.innerHTML = shtack.ToHTML();
        StackInput.value = "";
    }
}

function StackPop(){
    if(shtack.Count > 0){
        shtack.Pop();
        StackVisualizer.innerHTML = shtack.ToHTML();
    }
}

function QueuePush(){
    if(QueueInput.value != ""){
        ueque.Enque(QueueInput.value);
        QueueVisualizer.innerHTML = ueque.ToHTML();
        QueueInput.value = "";
    }
}

function QueuePop(){
    if(ueque.Count > 0){
        ueque.Deque();
        QueueVisualizer.innerHTML = ueque.ToHTML();
    }
}