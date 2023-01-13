// use local storage to manage data

// const addToDb = id => {
//     const quantity = localStorage.getItem(id);

//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }
//     else {
//         localStorage.setItem(id, 1);
//     }
// }

// export { addToDb };

const addToDb = id => {
    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// const removeFromDb = id => {
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         const shoppingCart = JSON.parse(storedCart);
//         if (id in shoppingCart) {
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

// const numbers = [15, 48, 75, 12, 30];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce((previous, current) => previous + current, 0);

// const items = [
//     { id: 1, name: 'Alta', price: 100 },
//     { id: 2, name: 'Alta', price: 100 },
//     { id: 3, name: 'Alta', price: 100 },
//     { id: 4, name: 'Alta', price: 100 },
//     { id: 5, name: 'Alta', price: 100 }
// ];

// const itemSumReducer = (previous, current) => previous + current;
// const itemReducer = items.reduce((previous, current) => previous + current, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { addToDb, removeFromDb, deleteShoppingCart, getTotalPrice as getTotal };