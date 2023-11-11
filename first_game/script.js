var character = document.getElementById("character");
var block = document.getElementById("block");
var characterLeftArm = document.getElementById("characterLeftArm");
var characterRightArm = document.getElementById("characterRightArm");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

function moveHands(){
    if(characterLeftArm.classList != "moveHand"){
        characterLeftArm.classList.add("moveHand");
    }
    setTimeout(function(){
        characterLeftArm.classList.remove("moveHand");
    }, 500);
    if(characterRightArm.classList != "moveHand"){
        characterRightArm.classList.add("moveHand");
    }
    setTimeout(function(){
        characterRightArm.classList.remove("moveHand");
    }, 500);
}
var checkDead = setInterval(function(){
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterBottom <= 80){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose");
    }
},10);