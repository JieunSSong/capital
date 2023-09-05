
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
    moneyInput = document.querySelector('.money_input > i');

// console.log(nextBtn2);

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

  // if(employment.value===''){
  //   valueCheck(employmentInput);
  // }else if(employmentInput.classList.contains('error')){
  //   employmentInput.classList.remove('error');
  // }

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
