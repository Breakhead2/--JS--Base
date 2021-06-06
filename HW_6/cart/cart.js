var items = [
    {
        itemName: "Кофта",
        ItemImgSrc: "img/jacket.jpg",
        itemPrice: 4600,
        quantity: 1
    },
    {
        itemName: "Ботинки",
        ItemImgSrc: "img/shoes.jpg",
        itemPrice: 6000,
        quantity: 1
    },
    {
        itemName: "Кепка",
        ItemImgSrc: "img/cap.jpg",
        itemPrice: 3000,
        quantity: 1
    }
]
//console.log(catalog);
window.onload = init;

function init() {
    // создаем каталог товаров
    for (var i = 0; i < items.length; i++) {
        item = document.createElement("div");
        item.className = "item";
        img = document.createElement("img");
        img.src = items[i].ItemImgSrc;
        item.appendChild(img);
        itemName = document.createElement("p");
        itemName.innerHTML = "Наименование товара: " + items[i].itemName;
        item.appendChild(itemName);
        itemPrice = document.createElement("p")
        itemPrice.innerHTML = "Цена товара: " + items[i].itemPrice + " рубл.";
        item.appendChild(itemPrice);
        // input = document.createElement("input");
        // input.className = "quantity";
        // input.placeholder = "Количество";
        // item.appendChild(input);
        button = document.createElement("button");
        button.setAttribute("id", "button_" + i);
        button.innerHTML = "Купить";
        button.onclick = addCart;
        item.appendChild(button);
        catalog.appendChild(item);
    }
    //создаем корзину
    var cartHeading = document.createElement("h3");
    cartHeading.innerHTML = "Корзина";
    cart.appendChild(cartHeading);
    var cartTable = document.createElement("table");
    cartTable.className = "basket_items";
    cart.appendChild(cartTable);
    var headingRow = document.createElement("tr");
    cartTable.appendChild(headingRow);
    var cartItemsName = document.createElement("th");
    cartItemsName.innerHTML = "Наименование товара";
    headingRow.appendChild(cartItemsName);
    // var cartItemsQuantity = document.createElement("th");
    // cartItemsQuantity.innerHTML = "Количество";
    // headingRow.appendChild(cartItemsQuantity);
    var cartTotalPrice = document.createElement("th");
    cartTotalPrice.innerHTML = "Цена";
    headingRow.appendChild(cartTotalPrice);

    var sum = 0;
    var summa = document.createElement("p");
    summa.className = "sum";
    cart.appendChild(summa);


    function addCart(event) {
        var selectedItem = items[event.target.id.split("_")[1]];
        var tr = document.createElement("tr");
        cartTable.appendChild(tr);
        var td = document.createElement("td");
        td.innerHTML = selectedItem.itemName;
        tr.appendChild(td);
        newTd = document.createElement("td");
        newTd.innerHTML = selectedItem.itemPrice + " рубл.";
        tr.appendChild(newTd);

        sum += selectedItem.itemPrice;
        summa.innerHTML = "Общая стоимость: " + sum + " рубл.";

    }

}

