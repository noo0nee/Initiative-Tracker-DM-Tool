var battleQueue = new Queue(
    new Character("Charlotte",1,2),
    new Character("Mialee",20,2),
    new Character("Cyro",8,2),
    new Character("Adebaran",18,20),
    new Character("Amelia",11,20),
    new Character("Draimund",23,20) 
    );

document.getElementById("add-character").addEventListener('click', addCharacter);
document.getElementById("next-character").addEventListener('click', nextCharacter);
document.getElementById("delete-character").addEventListener('click', deleteCharacter);
document.getElementById("sort-character").addEventListener('click', sortCharacter);
document.getElementById("init-tracker").addEventListener('click', initTracker);
document.getElementById("stop-tracker").addEventListener('click', stopTracker);

function printCharacters(queue){
    var divQueue = document.getElementById("characters-queue");
    divQueue.innerHTML = "";
    queue.print(divQueue);
}

function addCharacter(queue){
    queue.enqueue(new Character("", 0, 0));
    printCharacters(queue);
}

function sortCharacter(queue){
    queue.sorti();
    printCharacters(queue);
}
function initTracker(){
    document.getElementById("add-character").setAttribute("class","disabled btn");
    document.getElementById("sort-character").setAttribute("class","disabled btn");
    document.getElementById("init-tracker").setAttribute("class","disabled btn");
    document.getElementById("stop-tracker").setAttribute("class","waves-effect waves-light pink accent-1 btn");
    document.getElementById("next-character").setAttribute("class","waves-effect waves-light pink accent-1 btn");
}
function stopTracker(){
    document.getElementById("add-character").setAttribute("class","waves-effect waves-light pink accent-1 btn");
    document.getElementById("sort-character").setAttribute("class","waves-effect waves-light pink accent-1 btn");
    document.getElementById("stop-tracker").setAttribute("class","disabled btn");
    document.getElementById("init-tracker").setAttribute("class","waves-effect waves-light pink accent-1 btn");
    document.getElementById("next-character").setAttribute("class","disabled btn" );
}

function nextCharacter(queue){
    if(!queue.isEmpty()){
        var erased = queue.dequeue();
        queue.enqueue(erased);
        printCharacters(queue);
    }
}
function deleteCharacter(queue){
    queue.dequeue();
    printCharacters(queue);
}

function updateInitiative(item,id){
    item.initiative = document.getElementById(id).value;
}

function updateName(item,id){
    item.name = document.getElementById(id).value;
}

function updateCurrentHp(item,id){
    item.currentHp = document.getElementById(id).value;
}

function init(queue){

    document.getElementById("add-character").addEventListener('click', addCharacter.bind(null, queue));
    document.getElementById("next-character").addEventListener('click', nextCharacter.bind(null, queue));
    document.getElementById("delete-character").addEventListener('click', deleteCharacter.bind(null, queue));
    document.getElementById("sort-character").addEventListener('click', sortCharacter.bind(null, queue));

    printCharacters(queue);

}

init(battleQueue);