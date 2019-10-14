var myname = "Waffle King of the Lands";

console.log(myname)

var totalCost;
var totalwithtax;

var costPerItem = 2.50;
var numberOfItems =4;
var taxRate = 0.06;

totalCost = costPerItem * numberOfItems;
totalwithtax = totalCost + (taxRate * totalCost);

console.log(totalwithtax);