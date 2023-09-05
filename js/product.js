
  $('.product_wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    dots : true,  
    dotsClass : "slick-dots",
    autoplay:false,
    pauseOnHover : false,
    responsive : [
      { 
        breakpoint: 1200, 
        settings: {	
          slidesToShow:2,
          autoplay:false,
          dots : true 
        } 
      },
      {
        breakpoint : 768,
        settings : {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay : true,
          autoplaySpeed : 2000,
          dots : false,
          pauseOnHover : true,
          centerMode : true,
          variableWidth: true,
        }
      },{
        breakpoint : 450,
        settings : {
          slidesToShow : 1,
          slidesToScroll: 1,
          autoplay : true,
          autoplaySpeed : 3000,
          dots:false,
          pauseOnHover : true,
          centerMode : false,
          variableWidth:false
        }
      }
    ]
  });

// click 시 색 변경
let productBtn = document.querySelector('.m_more_btn');
productBtn.addEventListener('click',function(e){
  productBtn.querySelector('a').style.color='#444';
  productBtn.querySelector('i').style.backgroundColor='#444';
  
});
