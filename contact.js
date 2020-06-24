$('.emailid').hide();
$('footer').css('margin-top','50%');


$('.email').click(function(){
  $('.emailid').show();
  $('footer').css('margin-top','10%');
  $('.okbtn').show();
})

$('.okbtn').click(function(){
  $('.emailid').hide();
  $('footer').css('margin-top','50%');
  $('.okbtn').hide();
})
