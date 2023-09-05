// 전체동의를 누르면  다른것도 체크
// 다른것을 해제하면 전체동의가 체크가 해제
// 필수 동의하면 다음버튼이 빨간색으로 변하면서 넘어갈수있게 바뀜
let allCheck = document.getElementById('agree_all'),
    agree01 = document.getElementById('agree_1'),
    agree02 = document.getElementById('agree_2'),
    agree03 = document.getElementById('agree_3'),
    nextBtn = document.querySelector('.agree_wrap button');

allCheck.addEventListener('change',function(){
  console.log(allCheck);
  if(allCheck.checked){
    // $(".chkControl").prop("checked", true)
    // agree01.checked
    agree01.setAttribute('checked',true);
    agree02.setAttribute('checked',true);
    agree03.setAttribute('checked',true);
  
    if(agree01.checked && agree02.checked){
      nextBtn.classList.add('next');
    }else{
      nextBtn.classList.remove('next');
    }
  
  }

});

agree01.addEventListener('change',function(){
  if(allCheck.checked && agree01.checked == false){
    allCheck.checked=false;
  }

  if(agree01.checked && agree02.checked){
    nextBtn.classList.add('next');
  }else{
    nextBtn.classList.remove('next');
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
});

agree03.addEventListener('change',function(){
  if(allCheck.checked && agree03.checked == false){
    allCheck.checked=false;
  }
});