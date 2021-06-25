//fruit inventory obeject
const  FruitInventory={
    apple: 200,
    mango: 300,
    orange: 555,
    banana: 645,
    grapes: 799
}
// fruits Price object
const  FruitsPrice={
    apple: 100,
    mango: 200,
    orange: 50,
    banana: 25,
    grapes: 100
}
// apple quantity
appleQuantity = 4;
applePrice = FruitsPrice.apple *appleQuantity;

console.log(FruitInventory);
console.log(FruitsPrice)

// mango quantity
mangoQuantity= 3;
mangoPrice = FruitsPrice.mango * mangoQuantity;

//orange quantity
orangeQuantity = 2;
orangePrice = FruitsPrice.orange *orangeQuantity;

//banana  quantity
bananaQuantity = 0;
bananaPrice = FruitsPrice.banana*bananaQuantity;

//grapes quantity
grapesQuantity = 0;
grapesPrice = FruitsPrice.grapes*grapesQuantity;

const TotalPrice = applePrice + mangoPrice + orangePrice;
console.log(TotalPrice);