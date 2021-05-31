// cursor move
const body = document.querySelector('body');
const cursorEl = document.querySelector('.cursor');
document.addEventListener('mousemove', function (e) {
  let cursorMove = {
    x: 0,
    y: 0,
  };
  cursorMove.x = e.pageX;
  cursorMove.y = e.pageY;

  cursorEl.style.transform = `translate(${cursorMove.x}px,${cursorMove.y}px)`;
});

//nav-btn toggle
const navBtn = document.querySelector('.nav-btn');
const navBtnChild2 = document.querySelector('.nav-btn span:nth-child(2');
const navBtnChild3 = document.querySelector('.nav-btn span:nth-child(3)');
const mainNav = document.querySelector('.main-nav');
document.addEventListener('click', function (e) {
  if (e.target.closest('.nav-btn')) {
    mainNav.classList.toggle('nav-active');
    navBtnChild2.classList.toggle('icon-change');
    navBtnChild3.classList.toggle('icon-change');
  } else {
    mainNav.classList.remove('nav-active');
    navBtnChild2.classList.remove('icon-change');
    navBtnChild3.classList.remove('icon-change');
  }
});

//home-img move
const homeContainer = document.querySelector('.home');
const title = document.querySelector('.title');

let cursor = {
  x: 0,
  y: 0,
};

function moving(e) {
  cursor.x = -e.pageX / 10;
  cursor.y = -e.pageY / 10;
  title.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, ${cursor.y}px)`;
}
function remove() {
  title.style.transform = `translate(0px, 0px)`;
}
homeContainer.addEventListener('mousemove', moving);
homeContainer.addEventListener('mouseleave', remove);

function titleMove() {
  title.style.textShadow = `2px 10px 10px #5C5A56`;
}
function titleRemove() {
  title.style.textShadow = `none`;
}
title.addEventListener('mouseenter', titleMove);
title.addEventListener('mouseleave', titleRemove);

// products

const product1 = document.querySelector('.product-1');
const product2 = document.querySelector('.product-2');
const product3 = document.querySelector('.product-3');
const product4 = document.querySelector('.product-4');
const product = document.querySelectorAll('.product');
const productConatiner = document.querySelector('.container-pro');
const productimg = document.querySelector('.product-img');

// designer

const designAll = document.querySelectorAll('.designers');
const designAllImg = document.querySelectorAll('.designers > img');
const design1 = document.querySelector('.designer-1');
const design2 = document.querySelector('.designer-2');
const design3 = document.querySelector('.designer-3');
const design4 = document.querySelector('.designer-4');
const designContainer = document.querySelector('.makers');
const designerHead = document.querySelector('.designer-head');

function productScroll() {
  // product
  const scrollProduct1 = product1.getBoundingClientRect().top * 0.1;
  const scrollProduct2 = product2.getBoundingClientRect().top * 0.1;
  const scrollProduct3 = product3.getBoundingClientRect().top * 0.1;
  const scrollProduct4 = product4.getBoundingClientRect().top * 0.1;

  if (scrollProduct1 < 300) {
    product1.style.transform = `translate3d(${scrollProduct1}px, 0px,0)`;
  }
  if (scrollProduct2 < 300) {
    product2.style.transform = `translate3d(${scrollProduct2}px, 0px,0)`;
  }
  if (scrollProduct3 < 300) {
    product3.style.transform = `translate3d(-${scrollProduct3}px, 0,0)`;
  }
  if (scrollProduct4 < 300) {
    product4.style.transform = `translate3d(-${scrollProduct4}px, 0,0)`;
  }

  // design
  const scrr = designContainer.getBoundingClientRect().top * 0.3;
  const scrr2 = designContainer.getBoundingClientRect().top * 0.01;

  designAll.forEach(el => {
    if (scrr < 200) {
      el.style.transform = `translate3d(0, ${scrr}px,${scrr}px)`;
    }
    if (window.innerWidth < 768) {
      el.style.transform = `translate3d(${scrr2}px, ${scrr2}px,${scrr2}px)`;
    }
  });

  designAllImg.forEach(el => {
    if (scrr < 50) {
      el.classList.add('design-img-active');
    } else {
      el.classList.remove('design-img-active');
    }
  });

  if (scrr < 100) {
    designAll.forEach(el => {
      el.classList.add('designer-active');
    });
  } else {
    designAll.forEach(el => {
      el.classList.remove('designer-active');
    });
  }

  // testimonial

  const test1 = document.querySelector('.test-1');
  const test2 = document.querySelector('.test-2');
  const testScroll = test1.getBoundingClientRect().top * 0.1;
  const testScroll2 = test2.getBoundingClientRect().top * 0.1;

  if (testScroll < 200) {
    test1.style.transform = `translate3d(-${testScroll}px, ${testScroll}px,${testScroll}px)`;
  }
  if (testScroll2 < 200) {
    test2.style.transform = `translate3d(${testScroll2}px, -${testScroll2}px,-${testScroll2}px)`;
  }
}
window.addEventListener('scroll', productScroll);
