var charactersArray = [];
var turnIndex = -1;

function createTable(){
    turnIndex = -1;
    $("#tracker-body").empty();
    $("#tracker-body").append(
        "<h4 class=\"card-title animated fadeIn\">Initiative Tracker</h4>"+
        "<div class=\"container table-responsive-md\" id=\"tracker\">"+

        "<table class=\"table table-borderless animated fadeIn table-fixed\">"+
        
        "<thead class=\"primary-color\">"+
        "<tr class=\"text-white\">"+
        "<th >Initiative</th><th>Nombre</th><th>HP</th><th>Eliminar</th>"+
        "</tr></thead>"+
        "<tbody id=\"character-table\">"+
        "</tbody>"+

        "</table>"+

        "</div>"+
        "<div class=\"row\" id=\"button-group\">"+
        "<div class=\"col\">"+
        "<a class=\"btn light-blue text-white animated fadeIn\" id=\"add-character\">Añadir</a>"+
        "<a class=\"btn light-blue text-white animated fadeIn\" id=\"sort-character\">Ordenar</a>"+
        "<a class=\"btn light-blue text-white animated fadeIn\" id=\"next-character\">Siguiente</a></div>"+
        "</div></div>"
    );

    $(charactersArray).each(function( index, element ){
        $("#tracker-body").find("#character-table").append(
            "<tr id=\""+index+"\" class=\"character-row\">"+
            "<th class=\"td-in\" scope=\"row\"><input width=\"10px\" class=\"form-control tab-input initiative\" type=\"number\" pattern=\[0-9]*\" max=\"30\" min=\"1\" value=\""+element.initiative+"\" id=\""+index+"\"></th>"+

            "<td class=\"td-name\">"+element.name+"</td>"+

            "<td class=\"td-in\"><input class=\"form-control tab-input hp\" type=\"number\" pattern=\[0-9]*\" max=\"500\" min=\"0\" value=\""+element.hp+"\" id=\""+index+"\"></td>"+

            "<td class=\"td-in\"><a title=\"Borrar\" class=\"delete\" id=\""+index+"\">"+
            "<i class=\"fas fa-trash-alt\"></a></i></td>"+
            "</tr>"
        );
    });

};

function createInput(){
    $("#tracker-body").empty();
    $("#tracker-body").append("<form id=\"input-character\"><p class=\"h4 text-center mb-4 animated fadeIn\">Ingresar Personaje</p>");
    $("#tracker-body").find("#input-character").append("<div class=\"md-form form-lg animated fadeIn\" id=\"input-name\">");
    $("#tracker-body").find("#input-character").append("<div class=\"md-form form-lg animated fadeIn\" id=\"input-initiative\">");
    $("#tracker-body").find("#input-character").append("<div class=\"md-form form-lg animated fadeIn\" id=\"input-hp\">");

    $("#tracker-body").find("#input-name").append(
        "<input type=\"text\" id=\"name\" class=\"form-control form-control-lg\" required>",
        "<label for=\"name\">Nombre</label>"
    );
    $("#tracker-body").find("#input-initiative").append(
        "<input type=\"number\" id=\"initiative\" class=\"form-control form-control-lg\" pattern=\[0-9]*\" max=\"30\" min=\"1\" required>",
        "<label for=\"initiative\">Iniciativa</label>"
    );
    $("#tracker-body").find("#input-hp").append(
        "<input type=\"number\" id=\"hp\" class=\"form-control form-control-lg\" pattern=\[0-9]*\" max=\"500\" min=\"0\" required>",
        "<label for=\"hp\">HP</label>"
    );

    $("#tracker-body").find("#input-character").append(
        "<div class=\"text-center mt-4\">"+
        "<button class=\"btn light-blue text-white animated fadeIn\" id=\"save\" type=\"submit\">Guardar</button>"+
        "<button class=\"btn light-blue text-white animated fadeIn\" id=\"cancel\">Cancelar</button></div>"
    );
}

$(document).ready(function() { 
    $("#tracker-body").append(function(){
        createTable();
    });
}); 


$("#tracker-body").on("click", "#add-character", function(){
    createInput();
});

$("#tracker-body").on("click", "#sort-character", function(){
    charactersArray.sort(function(a, b){return b.initiative - a.initiative});
    createTable();
});

$("#tracker-body").on("click", "#save", function(){
    var charName = $("#tracker-body").find("#name").val();
    var charInit = $("#tracker-body").find("#initiative").val();
    var charHP = $("#tracker-body").find("#hp").val();

    $.trim(charName);

    if(!$.isEmptyObject(charName)){
        if( $.isNumeric(charInit) && $.isNumeric(charHP) ){
            if( charInit >= 1 && charInit <= 30){
                if( charHP >= 0 && charHP <= 500){
                    var newCharacter = {
                        name: charName,
                        initiative: charInit,
                        hp: charHP
                    };
                    charactersArray.push(newCharacter);

                    createTable();
                }
            }
        }
    }
});

$("#tracker-body").on("click", "#cancel", function(){
    createTable();
});

$("#tracker-body").on("input", ".initiative", function(){
    var index = $(this).attr("id");
    var getInit = $("#tracker-body").find(".initiative#"+index).val();
    charactersArray[index].initiative = getInit;
});

$("#tracker-body").on("input", ".hp", function(){
    var index = $(this).attr("id");
    var getHP = $("#tracker-body").find(".hp#"+index).val();
    charactersArray[index].hp = getHP;
});

$("#tracker-body").on("click", "a.delete", function(){
    var index = $(this).attr("id");
    alert("Se eliminara " + charactersArray[index].name);
    charactersArray.splice(index, 1);
    createTable();
});


$("#tracker-body").on("click", "#next-character", function(){
    $("#tracker-body").find(".character-row#"+turnIndex).removeClass("table-success");
    turnIndex++;
    
    if ( turnIndex < charactersArray.length ){
        $("#tracker-body").find(".character-row#"+turnIndex).addClass("table-success");
    }else {
        turnIndex =0;
        $("#tracker-body").find(".character-row#"+turnIndex).addClass("table-success");
    }
});