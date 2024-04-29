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
    }
})

let orderArray = []

function handleAddItem(menuID){

    const targetMenuItem = menuArray.filter((items) => {
        return items.id === Number(menuID)
    })[0]
    orderArray.push(targetMenuItem)

    document.getElementById("buy-item").innerHTML += `
        <div class="order-container">
            <div class="order-content>
                <div class="order-name">
                    <p>${targetMenuItem.name}</p>
                    <p class="remove" data-remove="${menu.id}">Remove</p>
                </div>
                <div class="order-price">
                    <p>$${targetMenuItem.price}</p>
                </div>
            </div>
        </div>`


    const orderTotal = orderArray.reduce((total, current) => total + current.price, 0)
    document.getElementById("total").innerHTML = `
        <div>
            <p>Total: $${orderTotal.toFixed(2)}</p>
        </div>`
    
    
    render()
}

function handleRemoveItem(menuID) {
    const targetMenuItem = menuArray.filter((items) => {
        return items.id === Number(menuID)
    })[0]

    let orderIndex = orderArray.findIndex(targetMenuItem)
    if(orderIndex !== -1){
        orderArray.splice(orderIndex, 1)
    }
    console.log(orderArray)
    render()
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
