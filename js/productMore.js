let lnb = document.querySelectorAll('.lnb > li'),
    subDic = document.querySelectorAll('.sub_directory > li');

// lnb 클릭시 on 붙음
for(let i = 0 ; i < lnb.length; i++){
    lnb[i].addEventListener('click', function(e){
        e.preventDefault();
        for(x = 0 ; x < lnb.length; x++){
            lnb[x].classList.remove('on');
        }
        lnb[i].classList.add('on');
    });
}

// sub_directory 클릭시 active 붙음
for(let j = 0 ; j < subDic.length; j++ ){
    subDic[j].addEventListener('click', function(e){
        e.preventDefault();
        for(let z = 0 ; z < subDic.length; z++){
            subDic[z].classList.remove('active');
        }
        subDic[j].classList.add('active');
    });
}

window.addEventListener('scroll',function(){
    let searchBtn = document.getElementById('searchBtn'),
        searchBtnY = searchBtn.offsetTop,
        navBtn = document.querySelector('.navBtn'),
        siteNav = this.document.querySelector('.navi'),
        footer = this.document.getElementById('footer'),
        footerY = footer.offsetTop,
        buttonBg = this.document.querySelector('.button_bg');
    if(this.window.scrollY > 100){
        siteNav.classList.add('sticker');
    }else{
        siteNav.classList.remove('sticker');
    }
    
    // console.log(searchBtn.offsetTop, this.window.scrollY);
    if(this.window.scrollY > searchBtnY){
        navBtn.classList.add('on');
    }else{
        navBtn.classList.remove('on');
    }

    console.log(this.window.scrollY, footerY);
    if(this.window.scrollY + 850 > footerY){
        buttonBg.classList.add('off');
    }else{
        buttonBg.classList.remove('off');
    }
});

// fnq
// li에 active 추가 되면 
// question의 icon 각도 변경
// answer display block
let fnqList = document.querySelectorAll('.fnq ul li');
for(let q = 0 ; q < fnqList.length; q++ ){
    fnqList[q].addEventListener('click',function(e){
        for(let n = 0; n < fnqList.length; n++){
            fnqList[n].classList.remove('active');
        }
        fnqList[q].classList.add('active');
    });
}

// 헤더 고칠수 있을까?
let title = document.querySelector('.lnb .on > a'),
    dataTitle = title.getAttribute('data-title'),
    changeTitle = document.querySelector('.header_inner .title');
    console.log(changeTitle);

    changeTitle.innerHTML = dataTitle;
// console.log(dataTitle);
