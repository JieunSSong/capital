// 전체동의를 누르면  다른것도 체크
// 다른것을 해제하면 전체동의가 체크가 해제
// 필수 동의하면 다음버튼이 빨간색으로 변하면서 넘어갈수있게 바뀜
let allCheck = document.getElementById('agree_all'),
    agree01 = document.getElementById('agree_1'),
    agree02 = document.getElementById('agree_2'),
    agree03 = document.getElementById('agree_3'),
    nextBtn = document.querySelector('.agree_wrap .nextBtn'),
    agreeModal1 = document.querySelector('.agree_modal01'),
    agreeModal2 = document.querySelector('.agree_modal02'),
    agreeModal3 = document.querySelector('.agree_modal03'),
    closeBtn1 = agreeModal1.querySelector('.closeBtn'),
    closeBtn2 = agreeModal2.querySelector('.closeBtn'),
    closeBtn3 = agreeModal3.querySelector('.closeBtn'),
    checkBtn1 = agreeModal1.querySelector('.checkBtn01'),
    checkBtn2 = agreeModal2.querySelector('.checkBtn01'),
    checkBtn3 = agreeModal3.querySelector('.checkBtn01');
console.log(nextBtn);

allCheck.addEventListener('change',function(){

  if(allCheck.checked){
    // 1. 전체동의를 체크하면 1,2,3 중에 체크 안되어있는거에 모달창 띄우기
    if(!agree01.checked){
      agreeModal1.classList.add('on');
      // 2. 전체동의를 클릭했을때 1,2,3 모달창이 떴을때 동의 누르면 다음꺼 모달이 나옴
    }else if(!agree02.checked){
      agreeModal2.classList.add('on');
    }else if(!agree03.checked){
      agreeModal3.classList.add('on');
    }

    checkBtn1.addEventListener('click',function(e){
      e.preventDefault();
      agree01.checked=true;
      agreeModal1.classList.remove('on');
      if(!agree02.checked){
        agreeModal2.classList.add('on');
      }else if(!agree03.checked){
        agreeModal3.classList.add('on');
      }
      if(agree01.checked && agree02.checked){
        nextBtn.classList.add('next');
      }else{
        nextBtn.classList.remove('next');
      }
    });

    checkBtn2.addEventListener('click',function(e){
      e.preventDefault();
      agree02.checked=true;
      agreeModal2.classList.remove('on');
      if(!agree03.checked){
        agreeModal3.classList.add('on');
      }

      if(agree01.checked && agree02.checked){
        nextBtn.classList.add('next');
      }else{
        nextBtn.classList.remove('next');
      }
    });

    checkBtn3.addEventListener('click',function(e){
      e.preventDefault();
      agree03.checked=true;
      agreeModal3.classList.remove('on');
    });

    // 3. 1번이랑 2번 체크되어있으면 다음 페이지로 넘어갈 수 있음
    if(agree01.checked && agree02.checked){
      nextBtn.classList.add('next');
    }else{
      nextBtn.classList.remove('next');
    }
  }
});

// 1번을 체크했을때 해당 모달 나옴
agree01.addEventListener('change',function(){
  // 1번이 체크 해제되면 전체동의꺼도 해제
  if(allCheck.checked && agree01.checked == false){
    allCheck.checked=false;
  }

  if(agree01.checked && agree02.checked){
    nextBtn.classList.add('next');
  }else{
    nextBtn.classList.remove('next');
  }


  if(agree01.checked){
    agreeModal1.classList.add('on');

    // 그냥 닫기 버튼 누르면 체크 해지
    closeBtn1.addEventListener('click',function(){
      agree01.checked=false;
      agreeModal1.classList.remove('on');
    });

    // 동의 버튼 누르면 체크
    checkBtn1.addEventListener('click',function(){
      agreeModal1.classList.remove('on');
      agree01.checked=true;
    });
  }else{
    agreeModal1.classList.remove('on');
    nextBtn.classList.remove('next');
    allCheck.checked=false;
  }
});

agree02.addEventListener('change',function(){
  if(allCheck.checked && agree02.checked == false){
    allCheck.checked=false;
  }

  if(agree01.checked && agree02.checked){
    nextBtn.classList.add('next');
  }else{
    nextBtn.classList.remove('next');
  }

  if(agree02.checked){
    agreeModal2.classList.add('on');
    // 그냥 닫기 버튼 누르면 체크 해지
    closeBtn2.addEventListener('click',function(){
      agree02.checked=false;
      agreeModal2.classList.remove('on');
    });

    // 동의 버튼 누르면 체크
    checkBtn2.addEventListener('click',function(){
      agreeModal2.classList.remove('on');
      agree02.checked=true;
    });
  }else{
    agreeModal2.classList.remove('on');
    nextBtn.classList.remove('next');
    allCheck.checked=false;
  }
});

agree03.addEventListener('change',function(){
  
  if(allCheck.checked && agree03.checked == false){
    allCheck.checked=false;
  }

  if(agree03.checked){
    agreeModal3.classList.add('on');
    // 그냥 닫기 버튼 누르면 체크 해지
    closeBtn3.addEventListener('click',function(){
      agree03.checked=false;
      agreeModal3.classList.remove('on');
      allCheck.checked=false;
    });

    // 동의 버튼 누르면 체크
    checkBtn3.addEventListener('click',function(){
      agreeModal3.classList.remove('on');
      agree03.checked=true;
    });
    
  }else{
    agreeModal3.classList.remove('on');
    // allCheck.checked=false;
  }
});

nextBtn.addEventListener('click',function(){
  if(nextBtn.classList.contains('next')){
    content[0].classList.remove('active');
    content[1].classList.add('active');
  }
});

// 다음버튼을 눌렀는데 input 에 값이 없으면 없는 쪽에 i에 클래스 추가 error (값이 없다고)
// input 에 값이 모두 있으면 다음버튼 활성화
// 다음 버튼 누를시 모달창 나오고
// 모달창 끝나면 다음페이지로 이동
let info = document.getElementById('info'),
    Name = document.getElementById('name'),
    employment = document.getElementById('employment'),
    day = document.getElementById('day'),
    money = document.getElementById('money'),
    nextBtn2 = document.querySelector('.nextBtn2');

let infoInput = document.querySelector('.info_input > i'),
    nameInput = document.querySelector('.name_input > i'),
    employmentInput = document.querySelector('.employment_input > i'),
    dayInput = document.querySelector('.day_input > i'),
    moneyInput = document.querySelector('.money_input > i'),
    watingModal = document.querySelector('.wating_modal');

nextBtn2.addEventListener('click',function(){
  if(info.value===''){
    valueCheck(infoInput);
  }else if(infoInput.classList.contains('error')){
    infoInput.classList.remove('error');
  }

  if(Name.value===''){
    valueCheck(nameInput);
  }else if(nameInput.classList.contains('error')){
    nameInput.classList.remove('error');
  }

  if(day.value===''){
    valueCheck(dayInput);
  }else if(dayInput.classList.contains('error')){
    dayInput.classList.remove('error');
  }

  if(money.value===''){
    valueCheck(moneyInput);
  }else if(moneyInput.classList.contains('error')){
    moneyInput.classList.remove('error');
  }

}); 

function valueCheck(item){
  item.classList.add('error');
}

info.addEventListener('keyup',function(){nextGo()});
Name.addEventListener('keyup',function(){nextGo()});
employment.addEventListener('keyup',function(){nextGo()});
day.addEventListener('keyup',function(){nextGo()});
money.addEventListener('keyup',function(){nextGo()});

function nextGo(){
  if (info.value !== '' && Name.value !== '' && employment.value !== '' && day.value !== ''&& money.value !== '') {
    nextBtn2.classList.add('next');
  }
}

let content = document.querySelectorAll('.contents');

function watingModalOff(){
  watingModal.classList.remove('on');
  content[1].classList.remove('active');
  content[2].classList.add('active');
}

nextBtn2.addEventListener('click',function(){
  if(nextBtn2.classList.contains('next')){
    watingModal.classList.add('on');
    setTimeout(watingModalOff,3000);
  }
});