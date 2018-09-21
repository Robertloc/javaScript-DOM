let msgtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam soluta distinctio eligendi placeat, recusandae delectus illum beatae unde. Sunt suscipit adipisci, dicta id modi natus cumque similique veniam aperiam.";



function display(text){
    let message=document.getElementById('text');
    message.innerHTML=text;
}

document.addEventListener('DOMContentLoaded', function(){
    let padlock=document.getElementById('padlock');
    padlock.addEventListener('mouseenter', function() {
        display(msgtext);
    });

});


document.addEventListener('DOMContentLoaded', function(){
    let padlock=document.getElementById('padlock');
    padlock.addEventListener('mouseleave', function() {
        display('');
    });

});