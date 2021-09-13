
var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<noOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function ()
    {
        var buttonInnerHTML=this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
    
});

document.addEventListener("keypress", function(event){
makesound(event.key);
buttonAnimation(event.key);

});
        function makesound(key){
            switch (key) {

                case "w":
                var tom1=new Audio('sounds/tom-1.MP3');
                tom1.play();
                break;

                case "a":
                var tom2=new Audio('sounds/tom-2.MP3');
                tom2.play();
                break;

                case "s":
                var tom3=new Audio('sounds/tom-3.MP3');
                tom3.play();
                break;

                case "d":
                var tom4=new Audio('sounds/tom-4.MP3');
                tom4.play();
                break;

                case "j":
                var snare=new Audio('sounds/snare.MP3');
                snare.play();
                break;

                case "k":
                var crash=new Audio('sounds/crash.MP3');
                crash.play();
                break;

                case "l":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
        
                
            default: console.log(buttonInnerHTML)
                break;
        }
}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("." + cuurntKey);
activeButton.classList.add("pressed");
}

setTimeout(function()  {
    activeButton.classList.remove("pressed");
}, 100);
}