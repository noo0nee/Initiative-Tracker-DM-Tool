var battleQueue = new Queue(
    new Character("Charlotte",1,2),
    new Character("Mialee",20,2),
    new Character("Cyro",8,2),
    new Character("Adebaran",18,20),
    new Character("Amelia",11,20),
    new Character("Draimund",23,20) 
    );

document.getElementById("add-character").addEventListener('click', addCharacter(battleQueue));
document.getElementById("next-character").addEventListener('click', nextCharacter(battleQueue));
document.getElementById("sort-character").addEventListener('click', sortCharacter(battleQueue));

function printCharacters(queue){
    var divQueue = document.getElementById("characters-queue");
    divQueue.innerHTML = "";
    queue.print(divQueue);
}

function addCharacter(queue){
    var nameInput = document.getElementById("character-name");
    var initiative = document.getElementById("character-initiative");
    var hp = document.getElementById("character-hp");
    if(nameInput.value.length!=0) 
        queue.enqueue(new Character(nameInput.value, initiative.value, hp.value));
    nameInput.value = "";
    initiative.value = "";
    hp.value = "";
    printCharacters(queue);
}

function sortCharacter(queue){
    queue.sorti();
    printCharacters(queue);
}

function nextCharacter(queue){
    var current = document.getElementById("current-character");
    current.innerHTML="";
    if(!queue.isEmpty()){
        var erased = queue.dequeue();
        queue.enqueue(erased);
        current.appendChild(erased.node);
        printCharacters(queue);
    }
}

function init(queue){
    document.getElementById("add-character").addEventListener('click', addCharacter.bind(null, queue));
    document.getElementById("next-character").addEventListener('click', nextCharacter.bind(null, queue));
    document.getElementById("sort-character").addEventListener('click', sortCharacter.bind(null, queue));
}

init(battleQueue);
