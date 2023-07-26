// Method 2

const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World!');

//Method 3

const btn2 = document.querySelector('#btn2');
btn2.addEventListener ('click', () => {
    alert('Hello JavaScript!');
});

btn.addEventListener('click', function (e) {
    e.target.style.cssText = 'background: blue';
  });

/*
Difference between these ->

-----------Arrow Function--------------
btn.addEventListener('click' () => {});

-----------Named Function--------------
btn.addEventListener('click', xyz());

function xyz() {
    alert();
}
*/