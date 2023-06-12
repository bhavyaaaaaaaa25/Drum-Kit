 
 //Using for loop to recognise a click whenever it happens for all the number of drums present which is 7
 //then creating a variable and storing the letter which was click using this.innerHTML as innerHTML is the value of the letter 
 //then calling the function drumroll which plays the corresponding audio
 for(var i=0;i<document.querySelectorAll(".drum").length;i++)
 {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        

        var letter = this.innerHTML;
        drumroll(letter);
        highlight(letter);
 });

  
//Now instead of click activity we want to addEventListener for whenever a key is pressed using keydown
//we pass the anonymous function(event) which calls the function drumroll for event.key
 document.addEventListener("keydown", function(event){
    drumroll(event.key);
    highlight(event.key);
 });

 //this function takes in the key pressed or the letter box clicked and then accordingly plays the sound
 function drumroll(key)
 {
    switch(key){
        case "w":
               var audio = new Audio ("./sounds/crash.mp3");
             audio.play();
             break;
         case "a":
                var audio = new Audio ("./sounds/kick-bass.mp3");
              audio.play();
              break;
              case "s":
               var audio = new Audio ("./sounds/snare.mp3");
             audio.play();
             break;
             case "d":
               var audio = new Audio ("./sounds/tom-1.mp3");
             audio.play();
             break;
             case "j":
               var audio = new Audio ("./sounds/tom-2.mp3");
             audio.play();
             break;
             case "k":
               var audio = new Audio ("./sounds/tom-3.mp3");
             audio.play();
             break;
             case "l":
               var audio = new Audio ("./sounds/tom-4.mp3");
             audio.play();
             break;}};
 }

 function highlight(key)
 {
document.querySelector("."+key).classList.add("pressed");

 setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},100);


 }