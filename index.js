let animation_typing  = setInterval(events, 100);let count = 0;function events(){count += 1;const alphabet = ["" , "" , "" ,  "" , "" , "|" , "|" , "|" , "" , "" , "" , "" , "" , "|"  , "|" , "|" , "" , "" , "" , "" , "" ,  "|" , "|" , "|" ,"" , "" , "" , "" , "" ,
"|" , "w|" , "we|" , "wel|" , "welc|" , "welco|" , "welcom|" , "welcome|" , "welcome |" , "welcome t|" , "welcome to|" , "welcome to |" , "welcome to m|" , "welcome to my|" , 
"welcome to my |" , "welcome to my |" , "welcome to my w|" , "welcome to my we|" , "welcome to my web|" , "welcome to my webs|" , "welcome to my websi|"
, "welcome to my websit|" , "welcome to my website|", "welcome to my website|", "welcome to my website|", "welcome to my website|", "welcome to my website|", "welcome to my website|", "welcome to my website|"];
document.getElementById("animation-typing").innerHTML = alphabet[count];if(count == alphabet.length - 1){ count = 0;}}window.addEventListener('scroll', myFUnctionSccroll);function myFUnctionSccroll(){let value = Math.floor(window.scrollY);console.log(value);
document.getElementById('move-background-2').style.transform = "translateY(" + -value + "px)";document.getElementById('box-1').style.transform = 'translateY(' +  -value + 'px)' + 'translateX(' +  -value  + 'px)';
document.getElementById('box-2').style.transform = 'translateY(' +  value + 'px)' + 'translateX(' +  value + 'px)';document.getElementById('box-3').style.transform = 'translateY(' +  -value + 'px)' + 'translateX(' +  value  + 'px)';
document.getElementById('box-4').style.transform = 'translateY(' +  -value + 'px)' + 'translateX(' +  -value  + 'px)'; document.getElementById('box-0-1').style.transform = 'translateY(' +  -value + 'px)' + 'translateX(' +  -value  + 'px)';
document.getElementById('box-last').style.transform = 'translateY(' +  value + 'px)' + 'translateX(' +  -value  + 'px)';let slide_1 =  document.getElementById('section-slide-1');let slide_2 = document.getElementById('section-slide-2')
let slide_3 = document.getElementById('section-slide-3');let slide_4 = document.getElementById('section-slide-4');let slide_5 = document.getElementById('section-slide-5')
let slide_6 = document.getElementById('section-slide-6');if(value > 10 && value < 834){slide_1.style.transform = 'translateY(-50px)';slide_1.style.visibility = 'visible';slide_1.style.transition = '1s';slide_2.style.transform = 'translateY(-50px)'
slide_2.style.visibility = 'visible';slide_2.style.transition = '1.5s';}else{if(value > 835 && value < 1499){slide_3.style.transform = 'translateY(0px)';slide_3.style.visibility = 'visible';slide_3.style.transition = '2s';
slide_4.style.transform = 'translateY(80px)';slide_4.style.visibility = 'visible';slide_4.style.transition = '2s';}else{if(value > 1500){
slide_5.style.transform = 'translateY(80px)';slide_5.style.visibility = 'visible';slide_5.style.transition = '1s';slide_6.style.transform = 'translateY(-200px)'
slide_6.style.visibility = 'visible';slide_6.style.transition = '1s';}}}}document.getElementById('box-slide').addEventListener('scroll', (event) => {
let value_2 = event.target.scrollLeft; /* Use scrollLeft to get the horizontal scroll position*/if(value_2 > 0){document.getElementById('button-left').style.display = "flex";
}else{if(value_2 == 0){document.getElementById('button-left').style.display = "none";}}});let on_off = true;var image = document.getElementById('Image-dark-light');
document.getElementById('button-darkmode').addEventListener('click', () => {if(on_off){document.getElementById('background').style.filter = "invert(1)";document.getElementById('background').style.transition = '0.5s';
document.getElementById('background-GUI').style.filter = "invert(1)";document.getElementById('scroll-bg-cs').style.filter = "invert(1)";
for(let i = 1; i <= 5; i++){document.getElementById('cient-' + i).style.filter = 'invert(1)';}document.getElementById('button-darkmode').style.marginLeft = '35px';document.getElementById('button-darkmode').style.transition = '0.5s';
image.src = 'https://cdn-icons-png.flaticon.com/128/4623/4623236.png';on_off = false;}else{document.getElementById('background').style.filter = "invert(0)";
document.getElementById('background').style.transition = '0.5s';document.getElementById('background-GUI').style.filter = "invert(0)";document.getElementById('scroll-bg-cs').style.filter = "invert(0)";
for(let i = 1; i <= 5; i++){document.getElementById('cient-' + i).style.filter = 'invert(0)';}document.getElementById('button-darkmode').style.marginLeft = '1px';document.getElementById('button-darkmode').style.transition = '0.5s';
image.src = 'https://cdn-icons-png.flaticon.com/128/606/606795.png';on_off = true};});let Imaagex = document.getElementById('Image-x');
let on_off_bg = true;document.getElementById('button-burger-mobile').addEventListener('click', () => {if(on_off_bg){document.getElementById('menu-bar-mobile-1').style.height = '35vh';document.getElementById('menu-bar-mobile-1').style.transition = '0.5s'
Imaagex.src = 'https://cdn-icons-png.flaticon.com/128/2723/2723639.png';on_off_bg = false;}else{document.getElementById('menu-bar-mobile-1').style.height = '0vh';
document.getElementById('menu-bar-mobile-1').style.transition = '0.5s';Imaagex.src = 'https://cdn-icons-png.flaticon.com/128/9663/9663120.png';
on_off_bg = true;}});
