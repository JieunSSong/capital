// 모달창
let mainBtn = document.getElementById('main_btn'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.modal .closeBtn'),
    submitBtn = document.querySelector('.modal .submitBtn');

mainBtn.addEventListener('click',function(){
  modal.classList.add('on');
});
closeBtn.addEventListener('click',function(){
  modal.classList.remove('on');
});
submitBtn.addEventListener('click',function(){
  alert('신청이 완료되었습니다');
});

const onClick = e => {
  const { x, y, width, height} = mainBtn.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height);
  mainBtn.style.setProperty('--diameter', radius * 2 + 'px');
  const { clientX, clientY } = e;
  const left = (clientX - x - radius) / width * 100 + '%';
  const top = (clientY - y - radius) / height * 100 + '%';

  mainBtn.style.setProperty('--left', left);
  mainBtn.style.setProperty('--top', top);
  mainBtn.style.setProperty('--a', '');
  setTimeout(() => {
    mainBtn.style.setProperty('--a', 'ripple-effect 500ms linear');
  }, 5)
}
mainBtn.addEventListener('click',onClick);

// 모달 켜진상태로 창 줄이면 안 사라짐
// resize 해주기
function resizeFun(){
  let modalActive = document.querySelector('.modal');
  if(window.outerWidth<768){
    modalActive.classList.remove('on');
  }
}
window.addEventListener('resize',resizeFun);

// Top버튼 누르면 스무스하게 올라가도록 ^^
function clickme() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}
let goTop = document.querySelector('.top_box');
goTop.addEventListener('click',function(){
  clickme();
});

// 반응형 스크롤 되면 사이드바 생기고,
let sideBar = document.querySelector('.side_bar');
window.addEventListener('scroll', () => { 
  //스크롤을 할 때마다 로그로 현재 스크롤 위치
  // console.log(window.scrollX, window.scrollY);
  if(window.scrollY > 300){
    sideBar.classList.add('on');
  }else{
    sideBar.classList.remove('on');
  }

  // 프로세스가 끝날때쯤 사이드바 없어지도록
  let process = document.getElementById('process'),
  proTop = process.offsetTop,
  proHeight = process.offsetHeight,
  changePoint = proTop+proHeight-600,
  sideBoxs = sideBar.querySelectorAll('.side_boxs');
  // console.log(sideBoxs);
  // console.log(window.scrollY, changePoint);
  // let scrollAmount = this.pageYOffset;
  if(window.scrollY>changePoint){
    for(let i = 0 ; i < sideBoxs.length; i++){
      sideBoxs[i].classList.add('off');
    }
  }else{
    for(let j = 0 ; j < sideBoxs.length; j++){
      sideBoxs[j].classList.remove('off');
    }
  }

  // 프로세스 순차적으로 나오도록 스크롤 이벤트
  // console.log(reqTop, window.scrollY);
  let reqCard = document.getElementById('request_card'),
    wh = 500,
    reqTop = reqCard.offsetTop - wh,
    callCard = document.getElementById('call_card'),
    callTop = callCard.offsetTop - wh,
    docCard = document.getElementById('document_card'),
    docTop = docCard.offsetTop - wh,
    writeCard = document.getElementById('write_card'),
    writeTop = writeCard.offsetTop - wh,      
    moneyCard = document.getElementById('money_card'),
    moneyTop = moneyCard.offsetTop - wh,  
    winScroll = window.scrollY;
    // if(winScroll > reqTop){
    //   reqCard.classList.add('on');
    // }

    // if(winScroll > callTop){
    //   callCard.classList.add('on');
    // }

    // if(winScroll > docTop){
    //   docCard.classList.add('on');
    // }

    // if(winScroll > writeTop){
    //   writeCard.classList.add('on');
    // }

    // if(winScroll > moneyTop){
    //   moneyCard.classList.add('on');
    // }

  // let proStart = proTop - 600;
  // console.log(proTop, winScroll);
  // if( proStart = winScroll ){
  //   console.log('이게맞나');
  //   reqCard.classList.remove('on');
  //   callCard.classList.remove('on');
  //   docCard.classList.remove('on');
  //   writeCard.classList.remove('on');
  //   moneyCard.classList.remove('on');
  // }

  let cards = document.querySelectorAll('.card');
  for(let z = 0 ; z < cards.length; z++){
    let cardsTop = cards[z].getBoundingClientRect().top;
    let vh = 500;
    if(window.width < 410){
      vh = 800;
    }else{
      vh = 500;
    }
    console.log(cardsTop);
    if(cardsTop < winScroll-vh){
      cards[z].classList.add('on');
    }else{
      cards[z].classList.remove('on');
    }
  }

});