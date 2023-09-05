
let gnbList = document.querySelectorAll('.gnb>li');

for(let i = 0 ; i < gnbList.length; i++){

  gnbList[i].addEventListener('mouseenter',function(e){
    e.preventDefault();
    if(window.outerWidth>769){
      gnbList[i].classList.add('on');
    }
  });
  gnbList[i].addEventListener('mouseleave',function(e){
    e.preventDefault();
    if(window.outerWidth>769){
      gnbList[i].classList.remove('on');
    }
  });

  gnbList[i].addEventListener('click',function(e){
    // e.preventDefault();
    if(window.outerWidth < 768){
      for(let j = 0 ; j < gnbList.length; j++){
        gnbList[j].classList.remove('on');
      }
        gnbList[i].classList.add('on');
    }
  });
}

// 햄버거 메뉴
let menu = document.querySelector('.mobile_menu'),
    nav = document.querySelector('.nav'),
    navBg = document.querySelector('.nav_bg'),
    body = document.querySelector('body'),
    sw = 0;

menu.addEventListener('click',function(e){
  e.preventDefault();
  if(sw==0){
    menu.classList.add('active');
    nav.classList.add('active');
    // nav.style.right='0px';
    navBg.style.display='block';
    // e.stopPropagation();
    body.classList.add('stop_scroll');
    sw=1;
  }else{
    menu.classList.remove('active');
    nav.classList.remove('active');
    navBg.style.display='none';
    body.classList.remove('stop_scroll');
    sw=0;
  }
});

// 화면 리사이즈 함수
function resizeFunc(){
  const active = document.querySelectorAll('.gnb li');
  if(window.outerWidth>768){
    for(let x = 0 ; x < active.length; x++){
      active[x].classList.remove('on');
    }
  }
}


window.addEventListener('resize',resizeFunc);