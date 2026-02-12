const items = [
["Belpuri",40],["Special Bhel Puri",50],["Mango Bhelpuri",50],
["Pineapple Bhelpuri",50],["Sevpuri",40],["Mango Sevpuri",50],
["Pineapple Sevpuri",50],["Tomato Sevpuri",50],
["Cucumber Sevpuri",50],["Dahi Tikki Puri",50],
["Tomato Slice",40],["Cucumber Slice",40],
["Pineapple Slice",40],["Boti Masala",40],
["Chips Masala",40],["Time Pass Masala",40],
["Sprouts Masala",50],["Banana Stem Masala",40],
["Pineapple Masala",50],["Cucumber Masala",40],
["Cucumber + Pineapple Masala",50],["All Mix Masala",50],
["Sprouts + Balehindu Masala",50],["Sweet Corn Masala",50],
["Kodbale Masala",50],["Bun Nippat Masala",50],
["Bun Pineapple Masala",55],["Nippat Masala",40],
["Congress Masala",60],["Moong Dal Masala",50]
];

let cart = {};
let total = 0;

const menuDiv = document.getElementById("menu");

items.forEach(item=>{
    let safeId = item[0].replace(/[^a-zA-Z0-9]/g,"");

    let card = document.createElement("div");
    card.className = "card";
    card.onclick = () => addItem(item[0], item[1], card);

    card.innerHTML = `
        <h4>${item[0]}</h4>
        <div class="price">₹${item[1]}</div>
        <div class="qty" id="${safeId}">0</div>
    `;

    menuDiv.appendChild(card);
});

function addItem(name, price, element){

    let safeId = name.replace(/[^a-zA-Z0-9]/g,"");

    if(!cart[name]){
        cart[name] = {qty:0, price:price};
    }

    cart[name].qty++;
    document.getElementById(safeId).innerText = cart[name].qty;

    element.classList.add("pop");
    setTimeout(()=>element.classList.remove("pop"),250);

    updateCart();
}

function updateCart(){

    total = 0;
    let cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = "";

    for(let item in cart){

        if(cart[item].qty > 0){

            let itemTotal = cart[item].qty * cart[item].price;
            total += itemTotal;

            cartDiv.innerHTML += 
            `<div>${item} x ${cart[item].qty} = ₹${itemTotal}</div>`;
        }
    }

    document.getElementById("total").innerText = total;
}
