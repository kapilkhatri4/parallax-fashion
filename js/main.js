const navpath = document.querySelector('.navigation');
const navBtn = document.querySelector('.nav-btn');
const body = document.querySelector('body')
window.addEventListener('scroll', function () {
  const scrollednav = window.pageYOffset / window.innerHeight;
  const navpos = scrollednav * 100 ;
  navBtn.style.transform = `translatey(${navpos}px)`;
});

const mainNav = document.querySelector('.main-nav');
navBtn.addEventListener('click', function () {
  mainNav.classList.toggle('nav-active');
});

const imgContainer = document.querySelector('.home-img');
const popImg1 = document.querySelector('.img-1');
const popImg2 = document.querySelector('.img-2');
const popImg3 = document.querySelector('.img-3');
const popImg4 = document.querySelector('.img-4');
const boxImg = document.querySelectorAll('.img-box');

let cursor = {
  x: 0,
  y: 0,
};

function moving(e) {

  cursor.x = (window.innerWidth / 3 - e.pageX) / 15;
  cursor.y =(window.innerHeight / 2 - e.pageY) / 20;
  this.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
}
function remove() {
  this.style.transform = `translate(0px, 0px)`;
}
popImg1.addEventListener('mousemove', moving);
popImg1.addEventListener('mouseleave', remove);

popImg2.addEventListener('mousemove', moving);
popImg2.addEventListener('mouseleave', remove);

popImg3.addEventListener('mousemove', moving);
popImg3.addEventListener('mouseleave', remove);

popImg4.addEventListener('mousemove', moving);
popImg4.addEventListener('mouseleave', remove);

// products

const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const product = document.querySelectorAll('.product');
const productConatiner = document.querySelector('.container-pro');
const productimg = document.querySelector('.product-img')

function productScroll() {
  // const scrolled = window.pageYOffset;
  
  // let pos = scrolled * 0.20;
  // let pos2 = scrolled * 0.15;

  const scroll = productConatiner.getBoundingClientRect().top * .2;
  // const scrr2 = designContainer.getBoundingClientRect().top * .05;
  console.log(scroll)
  product.forEach(el =>
  {
    if (scroll < 200) {
      el.style.transform = `translate3d(-${scroll}px, ${scroll}px,${scroll}px)`; 
      productimg.style.transform = `scale(1.2)`;
    }
  })
  // product.forEach(el =>
  // {
  //   let posTransform = `translate3d(-${pos}px, 0,-${pos}px )`
  //   let pos2ransform = `translate3d(${pos2}px,0px,${pos2}px )`

  //   if (window.scrollY > el.offsetTop) {
  //     product1.style.transform = posTransform;
  //     product2.style.transform = posTransform;

  //     product3.style.transform = pos2ransform;
  //     product4.style.transform = pos2ransform;

  //     if (window.innerWidth < 768) {
  //       pos = scrolled * 0.10;
  //       pos2 = scrolled * 0.09;
  //       pos3 = scrolled * 0.02;
  //       pos4 = scrolled * 0.01;
        
  //       posTransform = `translate3d(-${pos}px, 0,-${pos}px )`
  //       pos2Transform = `translate3d(-${pos2}px, 0px,${pos2}px )`
  //       posTransform3 = `translate3d(${pos3}px, 0,0 )`
  //       posTransform4 = `translate3d(${pos4}px, 0,0 )`

  //       product1.style.transform = posTransform;
  //       product2.style.transform = pos2Transform;
        
  //       product3.style.transform = pos3Transform;
  //       product4.style.transform =pos4Transform;
  //     }
  //   }

  // });
}
window.addEventListener('scroll', productScroll);


// designer

const designAll = document.querySelectorAll('.designers');
const design1 = document.querySelector('.designer-1');
const design2 = document.querySelector('.designer-2');
const design3 = document.querySelector('.designer-3');
const design4 = document.querySelector('.designer-4');
const designContainer = document.querySelector('.makers');
const designerHead = document.querySelector('.designer-head')


function designScroll()
{
  const scrr = designContainer.getBoundingClientRect().top * .4;
  const scrr2 = designContainer.getBoundingClientRect().top * .05;

  designAll.forEach(el =>
  {
    if (scrr < 200) {

      el.style.transform = `translate3d(${scrr}px, ${scrr}px,${scrr}px)`;
    }
    if (window.innerWidth < 768) {
      el.style.transform = `translate3d(0,0,0)`;
    }
  })
 
  if (scrr < 300) {
    designAll.forEach(el =>
    {
      el.classList.add('designer-active')
    }) 
  }
  if (scrr < -1000) {
    designAll.forEach(el =>
    {
      el.classList.remove('designer-active')
    }) 
  }
  
}
window.addEventListener('scroll', designScroll);