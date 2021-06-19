const open_side_menu=document.querySelector('#open-slide-menu');
const close_side_menu=document.querySelector('.btn-close');

open_side_menu.addEventListener('click',function(e){
  document.getElementById('side-menu').style.width='200px';
  document.getElementById('main').style.marginLeft='200px';
});

close_side_menu.addEventListener('click',function(e){
  document.getElementById('side-menu').style.width='0';
  document.getElementById('main').style.marginLeft='0';
})