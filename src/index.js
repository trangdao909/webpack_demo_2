 import _ from 'lodash';
 import './style.css';
 import Cat from './cat.jpg';
 import Data from './data.xml';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Cat;

   element.appendChild(myIcon);

   console.log(Data);

    return element;
  }
  
  document.body.appendChild(component());