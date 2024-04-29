const menuArray = [
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        id: 0,
        price: 12,
        image: "assets/burger.png"
    },
    {
        name: "French Fries",
        ingredients: ["potato", "salt"],
        id: 1,
        price: 3,
        image: "assets/fries.png",
    },
        {
        name: "Beer",
        ingredients: ["grain", "hops", "yeast", "water"],
        id: 2,
        price: 12,
        image: "assets/beer.png",
    }
]


document.addEventListener("click", (e) => {
    if (e.target.dataset.add){
        handleAddItem(e.target.dataset.add)
    } else if (e.target.dataset.remove){
        handleRemoveItem(e.target.dataset.remove)
    } else if (e.target.dataset.checkout){
        handleCheckOut(e.target.dataset.checkout)
    }
})

let orderArray = []

function handleAddItem(menuID) {
    const targetMenuItem = menuArray.find(item => item.id === Number(menuID));
    if (targetMenuItem) {
        orderArray.push(targetMenuItem);
        updateOrderDisplay(); // Call this to refresh the order display

        const orderTotal = orderArray.reduce((total, current) => total + current.price, 0);
        document.getElementById("total").innerHTML = `<div><p>Total: $${orderTotal.toFixed(2)}</p></div>`;
    }
}

function handleRemoveItem(menuID) {
    // Convert menuID to Number
    menuID = Number(menuID);

    // Find the index of the item in the orderArray
    const index = orderArray.findIndex(item => item.id === menuID);

    // Remove the item if it exists
    if (index > -1) {
        orderArray.splice(index, 1);
    }

    // Update the UI for ordered items
    updateOrderDisplay();

    // Update the total price display
    const orderTotal = orderArray.reduce((total, current) => total + current.price, 0);
    document.getElementById("total").innerHTML = `<div><p>Total: $${orderTotal.toFixed(2)}</p></div>`;
}

function updateOrderDisplay() {
    let orderHtml = '';
    orderArray.forEach(item => {
        orderHtml += `
            <div class="order-container">
                <div class="order-content">
                    <div class="order-name">
                        <p>${item.name}</p>
                        <p class="remove" data-remove="${item.id}">Remove</p>
                    </div>
                    <div class="order-price">
                        <p>$${item.price}</p>
                    </div>
                </div>
            </div>`;
    });
    document.getElementById("buy-item").innerHTML = orderHtml;
}


function getMenuHtml() {

    let menuHtml = ''

    menuArray.map((menu) => {
        menuHtml += `
            <div class="menu-container">
                <div class="menu-content">
                    <div class="menu-items">
                        <img src="${menu.image}"/>
                        <div>
                            <p class="menu-name">${menu.name}</p>
                            <p class="menu-ingredients">${menu.ingredients.join(", ")}</p>
                            <p class="menu-price">$${menu.price}</p>
                        </div>
                    </div>
                    <div class="add-item">
                        <p data-add=${menu.id}>+</p>
                    </div>
                </div>
            </div>`
    })
    return menuHtml
}

function render(){
    document.getElementById("menu").innerHTML = getMenuHtml()
}

render()
