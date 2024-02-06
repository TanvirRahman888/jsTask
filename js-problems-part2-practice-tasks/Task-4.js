//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
/*
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

*/

function findAveragePhonePrice(phones){
    if (!Array.isArray(phones)) {
        return "Must Enter an Array";        
    }
    let totalPrice=0;
    for (let i = 0; i < phones.length; i++) {
        if (typeof phones[i].price !=='number') {
            return 'Price must be a number.';
        }
        totalPrice+=phones[i].price;        
    }
    return totalPrice/phones.length;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 10 },
    { model: "PhoneB", brand: "Samsung", price: 20 },
    { model: "PhoneC", brand: "Oppo", price: 30 },
    { model: "PhoneD", brand: "Nokia", price: 40 },
    { model: "PhoneE", brand: "Iphone", price: 50 },
    { model: "PhoneF", brand: "HTC", price: 60 },
];

console.log(findAveragePhonePrice(phones));