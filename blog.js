$('.container1').on('mouseover', function(){
  $('.container1 h1').css('color','#f522a8');
});
$('.container1').click(function(){
  $('.container1 h1').css('color','#fff');
});

$('.container2').on('mouseover', function(){
  $('.container2 h1').css('color','#f522a8');
});
$('.container2').click(function(){
  $('.container2 h1').css('color','#fff');
});

$('.container3').on('mouseover', function(){
  $('.container3 h1').css('color','#f522a8');
});
$('.container3').click(function(){
  $('.container3 h1').css('color','#fff');
});


$('.container1-body').hide();
$('.btn2').hide();

$('.btn2').click(function(){
  $('.container1-body').hide();
  $('.btn2').hide();
  $('.image11').show();
});

$('.btn1').click(function(){
  $('.container1-body').show();
  $('.container3-body').hide();
  $('.btn6').hide();
  $('.btn2').show();
  $('.container2-body').hide();
  $('.btn4').hide();
  $('.image11').hide();
  $('.image12').show();
  $('.image13').show();
});





$('.container2-body').hide();
$('.btn4').hide();

$('.btn4').click(function(){
  $('.container2-body').hide();
  $('.btn4').hide();
  $('.image12').show();
});

$('.btn3').click(function(){
  $('.container2-body').show();
  $('.container3-body').hide();
  $('.btn4').show();
  $('.btn6').hide();
  $('.container1-body').hide();
  $('.btn2').hide();
  $('.image12').hide();
  $('.image11').show();
  $('.image13').show();
});




$('.container3-body').hide();
$('.btn6').hide();

$('.btn6').click(function(){
  $('.container3-body').hide();
  $('.btn6').hide();
  $('.image13').show();
});

$('.btn5').click(function(){
  $('.container3-body').show();
  $('.btn6').show();
  $('.container1-body').hide();
  $('.container2-body').hide();
  $('.btn2').hide();
  $('.btn4').hide();
  $('.image12').show();
  $('.image11').show();
  $('.image13').hide();
});
