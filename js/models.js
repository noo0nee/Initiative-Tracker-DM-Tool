class Queue {
    constructor(){
        this.dataStore = Array.prototype.slice.call(arguments, 0);
    }
    
    enqueue(element){
        this.dataStore.push(element);
    }
    enqueueFront(element){
        this.dataStore.unshift(element);
    }

    dequeue(){
        return this.dataStore.shift();
    }

    dequeueFinal(){
        return this.dataStore.pop();
    }

    isEmpty(){
        return this.dataStore.length == 0;
    }

    print(element){
        this.dataStore.forEach(function(item){
            element.appendChild(item.node);});
    }

    sorti(){
        this.dataStore.sort(function(a, b){return b.initiative-a.initiative});
    }
}

class Character{
    constructor(nombre, initiative, hpmax){
        this.name = nombre; 
        this.initiative = initiative;
        this.currentHp = hpmax;
        
        // Div Input-name
        var divName = document.createElement("div");
        var inputName = document.createElement("input");
        var labelName = document.createElement("label");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", this.name+"-name");
        //inputName.setAttribute("class", "white-text");
        inputName.setAttribute("value", this.name);
        labelName.setAttribute("for", this.name+"-name");
        labelName.setAttribute("class", "active");
        labelName.appendChild(document.createTextNode("Name: "));
        divName.setAttribute("class", "input-field inline col s4 ");
        divName.appendChild(inputName);
        divName.appendChild(labelName);

        // Div Input-Initiative
        var divInitiative = document.createElement("div");
        var inputInitiative = document.createElement("input");
        var labelInitiative = document.createElement("label");
        inputInitiative.setAttribute("type", "text");
        inputInitiative.setAttribute("id", this.name+"-initiative");
        //inputInitiative.setAttribute("class", "white-text");
        inputInitiative.setAttribute("value", this.initiative);
        labelInitiative.setAttribute("for", this.name+"-initiative");
        labelInitiative.setAttribute("class", "active");
        labelInitiative.appendChild(document.createTextNode("Initiative: "));
        divInitiative.setAttribute("class", "input-field inline col s2");
        divInitiative.appendChild(inputInitiative);
        divInitiative.appendChild(labelInitiative);

        // Div Input-HP
        var divCurrentHp = document.createElement("div");
        var inputCurrentHp = document.createElement("input");
        var labelHp = document.createElement("label");
        inputCurrentHp.setAttribute("type", "text");
        inputCurrentHp.setAttribute("id", this.name+"-currentHp");
        //inputCurrentHp.setAttribute("class", "white-text");
        inputCurrentHp.setAttribute("value", this.currentHp);
        labelHp.setAttribute("for", this.name+"-currentHp");
        labelHp.setAttribute("class", "active");
        labelHp.appendChild(document.createTextNode("HP: "));
        divCurrentHp.setAttribute("class", "input-field inline col s2");
        divCurrentHp.appendChild(inputCurrentHp);
        divCurrentHp.appendChild(labelHp);

        // Div general
        var div = document.createElement("div");
        div.setAttribute("id", "character-"+this.name);
        div.setAttribute("class", "col s12");
        div.appendChild(divName);
        div.appendChild(divInitiative);
        div.appendChild(divCurrentHp);
        
        this.node =  div;
    }
}