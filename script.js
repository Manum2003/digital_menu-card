// Change shop status here
let shopOpen = true;   // true = OPEN, false = CLOSED

const statusText = document.getElementById("status");

if (shopOpen) {
    statusText.innerHTML = "Status: <span style='color:green'>OPEN</span>";
} else {
    statusText.innerHTML = "Status: <span style='color:red'>CLOSED</span>";
}

// Menu items
const menuItems = [
    { name: "Belpuri", price: 40 },
    { name: "Special Bhel Puri", price: 50 },
    { name: "Mango Bhelpuri", price: 50 },
    { name: "Pineapple Bhelpuri", price: 50 },
    { name: "Sevpuri", price: 40 },
    { name: "Mango Sevpuri", price: 50 },
    { name: "Pineapple sev puri", price: 50 },
    { name: "Tomoto sev puri", price: 45 },
    { name: "Cucumber sev puri", price: 45 },
    { name: "Dahi tikki puri", price: 50 },
    { name: "Tomoto slice", price: 40 },
    { name: "Cucumber slice", price: 40 },
    { name: "Pineapple slice", price: 40 },
    { name: "Bhoti masala", price: 40},
    { name: "Chips masala", price: 40 },
    { name: "Time pass masala", price: 40 },
    { name: "Sprouts masala", price: 50 },
    { name: "Banana stem masala", price: 40 },
    { name: "Pineapple masala", price: 50 },
    { name: "Cucumber masala", price: 40 },
    { name: "Cumber+pineapple masala", price: 50 },
    { name: "All mix masala", price: 50 },
    { name: "Sprouts masala", price: 50 },
    { name: "Sweet corn masala", price: 50 },
    { name: "Kodbele masala", price: 50 },
    { name: "Nippat masala", price: 40 },
    { name: "Congress masala", price: 60 },
    { name: "Moong dal masala", price: 50 }
];

const menuTable = document.getElementById("menu");

menuItems.forEach(item => {
    let row = `<tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
              </tr>`;
    menuTable.innerHTML += row;
});
