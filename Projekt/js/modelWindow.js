
var modalBtn= document.querySelector('#myBtn');
var modalBg=document.querySelector('.modal-bg');
var modalClose=document.querySelector('.close-kontakt');
modalBtn.addEventListener('click',function(){

  
  modalBg.classList.add('bg-active');

});

modalClose.addEventListener('click',function(){

  modalBg.classList.remove('bg-active');

});

