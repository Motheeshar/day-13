

// Challenge 1.1: 
document.getElementById('container').style.backgroundColor = 'lightblue';

// Challenge 1.2: 
document.querySelector('#header').textContent = 'These are the DOM Methods';

// Challenge 1.3:  
const domMethodsElements = document.getElementsByClassName('dom-methods');
for (let i = 0; i < domMethodsElements.length; i++) {
    domMethodsElements[i].style.color = 'red';
}

// Challenge 1.4: 
const domMethodsElements2 = document.querySelectorAll('.dom-methods');
for (let i = 0; i < domMethodsElements2.length; i++) {
    domMethodsElements2[i].style.fontSize = '20px';
}

// Challenge 2.1: 
const newDiv = document.createElement('div');
newDiv.textContent = 'Division';
document.body.appendChild(newDiv);

// Challenge 2.2: 
newDiv.setAttribute('id', 'main');
console.log('ID:', newDiv.getAttribute('id')); 

// Challenge 2.3:  
newDiv.innerHTML = 'This is a division';

// Challenge 2.4:  
const newParagraph = document.createElement('p');
newParagraph.innerText = 'This is a paragraph tag';
newDiv.appendChild(newParagraph);

// Challenge 2.5: 
const footer = document.querySelector('.footer');
footer.classList.remove('footer');  
footer.classList.add('dom-method-footer');

// Challenge 2.6: 
const paragraphs = document.querySelectorAll('#main p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
}

// Challenge 2.7: 
const copyrightDiv = document.querySelector('.copyright');
if (copyrightDiv) {
    copyrightDiv.parentNode.removeChild(copyrightDiv);
} else {
    console.log('Element with class "copyright" not found.');
}


