// Define the pricing for each item in pence
var prices = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
};
// Function to calculate the total price of the shopping basket
function calculateTotal(basket) {
    var itemCounts = {};
    // Count the occurrences of each item in the basket
    for (var _i = 0, basket_1 = basket; _i < basket_1.length; _i++) {
        var item = basket_1[_i];
        if (prices[item]) {
            itemCounts[item] = (itemCounts[item] || 0) + 1;
        }
        else {
            console.warn("Unknown item: ".concat(item, " \u2014 ignored"));
        }
    }
    var total = 0;
    // Calculate total based on item counts and special offers
    for (var _a = 0, _b = Object.entries(itemCounts); _a < _b.length; _a++) {
        var _c = _b[_a], item = _c[0], count = _c[1];
        switch (item) {
            case 'Melon':
                // Buy one get one free
                var melonPairs = Math.floor(count / 2);
                var melonRemainder = count % 2;
                total += (melonPairs + melonRemainder) * prices[item];
                break;
            case 'Lime':
                // Three for the price of two
                var limeTriplets = Math.floor(count / 3);
                var limeRemainder = count % 3;
                total += (limeTriplets * 2 + limeRemainder) * prices[item];
                break;
            default:
                // Regular pricing
                total += count * prices[item];
        }
    }
    return total;
}
// Example usage:
var basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Lime'];
var totalPence = calculateTotal(basket);
console.log("Total: \u00A3".concat((totalPence / 100).toFixed(2)));
