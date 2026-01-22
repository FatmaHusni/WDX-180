/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE 
const firstParagraph = document.querySelector('p');
const firstParagraph1 = document.querySelector('#paragraph1');
const firstParagraph2 = document.querySelector('#paragraph2');
const firstParagraph3 = document.querySelector('#paragraph3');
const firstParagraph4 = document.querySelector('#paragraph4');
const firstParagraphAll = document.querySelectorAll('p');
const idName1 = document.querySelectorAll('p')[1];
// This method can be used to set id and class.
idName1.setAttribute('id', 'paragraphOne');

const idName2 = document.querySelectorAll('p')[2];
idName2.id = 'paragraphTwo';
const className3 = document.querySelectorAll('p')[3];
className3.classList = 'paragraphThree';
const className4 = document.querySelectorAll('p')[4];
className4.className = 'paragraphFour';