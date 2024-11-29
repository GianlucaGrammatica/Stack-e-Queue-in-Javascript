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

    Peak(){
        return this.BaseArray[0];
    }

    Clear(){
        this.BaseArray = [];
        this.Count = 0;
    }
}

let StackVisualizer = document.getElementById("StackVisualizer");
let InputAddButton = document.getElementById("InputAddButton");
let TextInput = document.getElementById("TextInput");

let shtack = new Stack();


InputAddButton.addEventListener("click", StackPush);

function StackPush(){
    if(TextInput.value != ""){
        shtack.Push(TextInput.value);
        StackVisualizer.innerHTML = shtack.ToHTML();
        TextInput.value = "";
    }
}

