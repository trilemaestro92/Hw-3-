window.onscroll = function() {myFunction()};

var header = document.getElementsByClassName("head");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
    
  } 
  // else {
  //   header.classList.remove("sticky");
    
  // }
}

$('.box project1').on('click', function(){
  location.href = "https://nodejs-gt.herokuapp.com/";
})
