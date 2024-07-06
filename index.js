// // Write your code here!
// const newHeader = document.createElement('h1');
// document.body.append(newHeader);
// newHeader.textContent = "Sherry is the champion";
// document.body.appendChild(newHeader);

// const mainElement = document.getElementById('main');
// if (mainElement) {
//     mainElement.remove();
// }
document.querySelector('main#main').remove();
//creating champion name;
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Sherry is the champion';