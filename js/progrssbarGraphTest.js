let graphWrap = document.querySelectorAll('.graph_box ul li'),
    first = document.querySelector('.first'),
    last = document.querySelector('.last');


    // graphWrap.forEach(item => {
    //     graphResAni(item);
    //     graphBarAni(item);
    // });

// for(let i = 0 ; i < graphWrap.length; i++){
//     graphAni(graphWrap[i]);
// }

// graphAni(graphWrap[0]);
// graphAni(graphWrap[1]);
// function graphBarAni(item){
//     let num = 0;
//     let bar = item.querySelector('.bar'),
//         barValue = bar.getAttribute('data-bar');
//         console.log(barValue);
//     let barAni = setInterval(()=>{
//         num++;
//         if(num == barValue){
//             first.classList.add('on');
//             clearInterval(barAni);
//             return;
//         }
//         bar.style.height = `${num}%`;
//     },10);
// }
// function graphResAni(item){
//     let num2 = 0;
//     let res = item.querySelector('.res'),
//         resValue = res.getAttribute('data-res');
//         console.log(resValue);
//     let resAni = setInterval(()=>{
//         num2++;
//         if(num2 == resValue){
//             clearInterval(resAni);
//             last.classList.add('on');
//             return;
//         }
//         res.style.height = `${num2}%`;
//     },10);
// }
// function graphAni(item){
//     graphResAni(item);
//     graphBarAni(item); 
// }



function graphBarAni01(){
    let barNum01 = 0;
    let bar = document.querySelector('.li01 .bar'),
        barValue = bar.getAttribute('data-bar');
    let barAni = setInterval(()=>{
        barNum01++;
        if(barNum01 == barValue){
            first.classList.add('on');
            clearInterval(barAni);
            return;
        }
        bar.style.height = `${barNum01}%`;
    },10);
}

function graphResAni01(){
    let resNum01 = 0;
    let res = document.querySelector('.li01 .res'),
        resValue = res.getAttribute('data-res');
    let resAni = setInterval(()=>{
        resNum01++;
        if(resNum01 == resValue){
            clearInterval(resAni);
            return;
        }
        res.style.height = `${resNum01}%`;
    },10);
}

function graphBarAni02(){
    let barNum02 = 0;
    let bar = document.querySelector('.li02 .bar'),
        barValue = bar.getAttribute('data-bar');
        // console.log(barValue);
    let barAni = setInterval(()=>{
        barNum02++;
        if(barNum02 == barValue){
            // first.classList.add('on');
            clearInterval(barAni);
            return;
        }
        bar.style.height = `${barNum02}%`;
    },15);
}

function graphResAni02(){
    let resNum02 = 0;
    let res = document.querySelector('.li02 .res'),
        resValue = res.getAttribute('data-res');
        // console.log(resValue);
    let resAni = setInterval(()=>{
        resNum02++;
        if(resNum02 == resValue){
            clearInterval(resAni);
            // last.classList.add('on');
            return;
        }
        res.style.height = `${resNum02}%`;
    },15);
}

function graphBarAni03(){
    let barNum03 = 0;
    let bar = document.querySelector('.li03 .bar'),
        barValue = bar.getAttribute('data-bar');
        // console.log(barValue);
    let barAni = setInterval(()=>{
        barNum03++;
        if(barNum03 == barValue){
            // first.classList.add('on');
            clearInterval(barAni);
            return;
        }
        bar.style.height = `${barNum03}%`;
    },15);
}

function graphResAni03(){
    let resNum03 = 0;
    let res = document.querySelector('.li03 .res'),
        resValue = res.getAttribute('data-res');
        // console.log(resValue);
    let resAni = setInterval(()=>{
        resNum03++;
        if(resNum03 == resValue){
            clearInterval(resAni);
            // last.classList.add('on');
            return;
        }
        res.style.height = `${resNum03}%`;
    },20);
}

function graphBarAni04(){
    let barNum04 = 0;
    let bar = document.querySelector('.li04 .bar'),
        barValue = bar.getAttribute('data-bar');
        // console.log(barValue);
    let barAni = setInterval(()=>{
        barNum04++;
        if(barNum04 == barValue){
            // first.classList.add('on');
            clearInterval(barAni);
            return;
        }
        bar.style.height = `${barNum04}%`;
    },20);
}

function graphResAni04(){
    let resNum04 = 0;
    let res = document.querySelector('.li04 .res'),
        resValue = res.getAttribute('data-res');
        // console.log(resValue);
    let resAni = setInterval(()=>{
        resNum04++;
        if(resNum04 == resValue){
            clearInterval(resAni);
            last.classList.add('on');
            return;
        }
        res.style.height = `${resNum04}%`;
    },18);
}

graphResAni01();
graphBarAni01();

graphResAni02();
graphBarAni02();

graphResAni03();
graphBarAni03();

graphResAni04();
graphBarAni04();