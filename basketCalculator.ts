/*
 write a program in TypeScript/JAVA that calculates the price of a basket of shopping.

The solution should be accomplished in roughly two hours.

Items are presented one at a time, in a list, identified by name - for example "Apple" or "Banana".

Multiple items are present multiple times in the list, so for example ["Apple", "Apple", "Banana"] is a basket with two apples and one banana.
 
Items are priced as follows:

 - Apples are 35p each
 - Bananas are 20p each
 - Melons are 50p each, but are available as ‘buy one get one free’
 - Limes are 15p each, but are available in a ‘three for the price of two’ offer

Given a list of shopping, calculate the total cost of those items.

Kindly upload the code repository on GitHub and provide the details of the same. 

*/


const prices: Record<string, number> = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
  };
  
  function calculateTotal(basket: string[]): number {
    const itemCounts: Record<string, number> = {};
  
    for (const item of basket) {
      if (prices[item]) {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
      } else {
        console.warn(`Unknown item: ${item} — ignored`);
      }
    }
  
    let total = 0;
  
    for (const [item, count] of Object.entries(itemCounts)) {
      switch (item) {
        case 'Melon':
          const melonPairs = Math.floor(count / 2);
          const melonRemainder = count % 2;
          total += (melonPairs + melonRemainder) * prices[item];
          break;
        case 'Lime':
          const limeTriplets = Math.floor(count / 3);
          const limeRemainder = count % 3;
          total += (limeTriplets * 2 + limeRemainder) * prices[item];
          break;
        default:
          total += count * prices[item];
      }
    }
  
    return total;
  }
  
  const basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime', 'Lime'];
  const totalPence = calculateTotal(basket);
  console.log(`Total: £${(totalPence / 100).toFixed(2)}`);
  