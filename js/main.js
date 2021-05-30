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

// designer

const designAll = document.querySelectorAll('.designers');
const design1 = document.querySelector('.designer-1');
const design2 = document.querySelector('.designer-2');
const design3 = document.querySelector('.designer-3');
const design4 = document.querySelector('.designer-4');
const designContainer = document.querySelector('.makers');
const designerHead = document.querySelector('.designer-head')



function productScroll() {

  const scrollProduct1 = (product1.getBoundingClientRect().top * .1);
  const scrollProduct2 = (product2.getBoundingClientRect().top * .1);
  const scrollProduct3 = (product3.getBoundingClientRect().top * .1);
  const scrollProduct4 = (product4.getBoundingClientRect().top * .1);
 
  if (scrollProduct1 < 300) {
    product1.style.transform = `translate3d(${scrollProduct1}px, -${scrollProduct1}px,${scrollProduct1}px)`;
  }
  if (scrollProduct2 < 300) {
    product2.style.transform = `translate3d(${scrollProduct2}px, -${scrollProduct2}px,0)`;
  }
  if (scrollProduct3 < 300) {
    product3.style.transform = `translate3d(-${scrollProduct3}px, ${scrollProduct3}px,0)`;
  }
  if (scrollProduct4 < 300) {
    product4.style.transform = `translate3d(-${scrollProduct4}px, ${scrollProduct4}px,0)`;
  }




  const scrr = designContainer.getBoundingClientRect().top * .2;
  const scrr2 = designContainer.getBoundingClientRect().top * .02;

  designAll.forEach(el =>
  {
    if (scrr < 200) {
      el.style.transform = `translate3d(${scrr}px, ${scrr}px,${scrr}px)`;
    }
    if (window.innerWidth < 768) {
      el.style.transform = `translate3d(${scrr2}px, ${scrr2}px,${scrr2}px)`;
    }
  })
 
  if (scrr < 150) {
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
  

  // testimonial
  const test1 = document.querySelector('.test-1')
  const test2 = document.querySelector('.test-2')
  const testContainer = document.querySelector('.test-container')

  const testScroll = test1.getBoundingClientRect().top * .1;
  const testScroll2 = test2.getBoundingClientRect().top * .1;

  if (testScroll < 200) {
    test1.style.transform = `translate3d(-${testScroll}px, ${testScroll}px,${testScroll}px)`;
  }
  if (testScroll2 < 200) {
    test2.style.transform = `translate3d(${testScroll2}px, -${testScroll2}px,-${testScroll2}px)`; 
  }


}
window.addEventListener('scroll', productScroll);



