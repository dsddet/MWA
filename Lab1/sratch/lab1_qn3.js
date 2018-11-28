const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
}

function applyCoupon(item) {
    return (x) => { item.price = item.price * ((100 - x) / 100); return item }
}

console.log(applyCoupon(item)(10).price);