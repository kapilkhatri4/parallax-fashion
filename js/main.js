const navpath = document.querySelector('.navigation');
const navBtn = document.querySelector('.nav-btn');

window.addEventListener('scroll', function () {
  const scrollednav = window.pageYOffset;
  const navpos = scrollednav * 0.3;
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
  // cursor.x = e.clientX * 0.1 - 100;
  // cursor.y = e.clientY * 0.1;

  cursor.x = (e.clientX * 0.1) / 4;
  cursor.y = (e.clientY * 0.1) / 4;
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
console.log();
function productScroll() {
  const scrolled = window.pageYOffset;
  let pos = scrolled * 0.3;
  let pos2 = scrolled * 0.2;

  product.forEach(el => {
    if (window.scrollY > el.offsetTop) {
      product1.style.transform = `translate3d(${pos}px, 0, 0 )`;
      product2.style.transform = `translate3d(${pos}px, 0, 0 )`;

      if (window.innerWidth < 768) {
        pos = scrolled * 0.1;
        product1.style.transform = `translate3d(${pos}px, 0, 0 )`;
        product2.style.transform = `translate3d(${pos}px, 0, 0 )`;
      }
    }

    if (window.scrollY > el.offsetTop) {
      product3.style.transform = `translate3d(${pos2}px, 0, 0 )`;
      product4.style.transform = `translate3d(${pos2}px, 0, 0 )`;

      if (window.innerWidth < 768) {
        pos2 = scrolled * 0.08;
        product3.style.transform = `translate3d(${pos2}px, 0, 0 )`;
        product4.style.transform = `translate3d(${pos2}px, 0, 0 )`;
      }
    }
  });
}
window.addEventListener('scroll', productScroll);
