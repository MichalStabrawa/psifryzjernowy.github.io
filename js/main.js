$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

   if (okno.scrollTop() >= 100) {
      menu.addClass('scroll');
   }

   okno.scroll(function () {

      if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
       } else {
            menu.removeClass('scroll');
        }
  });

    /*Smoth scroll*/

    $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('#main-nav').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });


});



$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});




function myFunction(){
    var terminy=document.getElementById('termin').value;
    
    document.getElementById('sprawdz').innerHTML="Ten termin jest niedostepny";
    
}

/*myBtn scrollTop*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$('#myBtn').on('click',function(){
    $('html, body').animate({
        scrollTop: $('body').offset().top
    },1000)
})


/*Price function*****************************************************************************************************************/

function priceShow(){
    var priceShow1=document.getElementById('price');
    priceShow1.style='display:block';
      document.getElementById('changePrice').innerHTML="90-100zł";
   
   
}

document.getElementById('priceS').addEventListener('click', priceShow);

function priceShowMedium(){
    var priceShow2=document.getElementById('price');
    priceShow2.style="display:block";
    document.getElementById('changePrice').innerHTML="120-150zł";
  
     
}

document.getElementById('priceM').addEventListener('click', priceShowMedium);

function priceShowLarge(){
    var priceShow3=document.getElementById('price');
    priceShow3.style="display:block";
    document.getElementById('changePrice').innerHTML="160-250zł"
    
}

document.getElementById('priceL').addEventListener('click', priceShowLarge);






/*LIGHBOX EXAMPLE script*****************************************************************************************************************************galeria.html*/
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



        