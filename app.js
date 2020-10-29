/*const form = document.querySelector("#listForm");
form.addEventListener('submit', function (e) {
    const prod = form.elements.product.value;
    const amt = form.elements.qty.value;
    const newList = document.createElement('li');
  
    e.preventDefault();
})*/

const form = document.querySelector('#listForm');
const list= document.querySelector('#list');
 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = document.querySelector('#product');
    const quantity = document.querySelector('#qty');
    addContent(product.value, quantity.value);
    product.value = '';
    quantity.value = '';
});
 
const addContent = (product, quantity) => {
    const item = document.createElement('li');
    item.innerText = (`${quantity} ${product}`);
    list.appendChild(item);
}