window.onload = function(){
    let bg_0 = document.getElementById('background-0');

    bg_0.style.visibility = 'visible';
    
    setTimeout(myFunctionLoad, 1500);

    function myFunctionLoad(){
        bg_0.style.transform = 'translateY(-700px)';
        bg_0.style.visibility = 'hidden';
        bg_0.style.transition = '0.5s';
        

    }
}