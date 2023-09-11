// selecting div.content
const content = document.querySelector('.content');

// edit 1 
const p1 = document.createElement('p');
p1.textContent = "Hey I'm Red!";
p1.style.cssText = 'color: red';

content.appendChild(p1);

//edit 2
const h3 = document.createElement('h3');
h3.textContent = "I'am blue h3";
h3.style.cssText = 'color: blue';

content.appendChild(h3);

//edit 3
const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.cssText = 'height: 100px; background-color: pink; border: 2px solid black;';

content.appendChild(newDiv);

// selecting div.newDiv
const currentDiv = document.querySelector('.newDiv');

// edit 3.1
const h1 = document.createElement('h1');
h1.textContent = "I'm in div";

newDiv.appendChild(h1);

//edit 3.2
const p2 = document.createElement('p');
p2.classList.add('p2');
p2.textContent = "MEE TOO!";

newDiv.appendChild(p2);
