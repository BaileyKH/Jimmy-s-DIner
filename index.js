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
    }
})

function handleAddItem(menuID){
    const targetMenuItem = menuArray.filter((items) => {
        return items.id == menuID
    })[0]

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
                            <p class="menu-ingredients">${menu.ingredients}</p>
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