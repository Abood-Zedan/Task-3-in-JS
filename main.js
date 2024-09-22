var nameInput = document.querySelector('#name');
var descriptionInput = document.querySelector('#description');
var priceInput = document.querySelector('#price');
var registerForm = document.querySelector('.registerForm');

var products = [];

registerForm.onsubmit = function (e) {
    e.preventDefault();

    var product = {
        name: nameInput.Value,
        description: descriptionInput.value,
        price: priceInput.value
    }

    products.push(product);
    printData();
}

function printData() {
    var data = ``;
    for (var i = 0; i < products.length; i++) {
        data += `
        <tr>
            <td>${products[i].name}</td>
            <td>${products[i].description}</td>
            <td>${products[i].price}</td>
        </tr>
    `
    }
    document.querySelector('tbody').innerHTML = data;
}
