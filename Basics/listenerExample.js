// to select group of nodes
const buttons = document.querySelectorAll('button');


// to iterate over each button
buttons.forEach((button) => {


// to add 'click listener' to each of these nodes.
    button.addEventListener('click', () => {
        alert(button.id);
        document.getElementById('answer').innerHTML = "You clicked button no. " + button.id;
    });
});

// solution using named function

/* 
buttons.forEach(function(button) {
    button.addEventListener('click', handleEventListeners)
});

function handleEventListeners(event) {
    const button = event.target;
    alert(button.id);
}
*/

