var mart = new Fruit("mango", "yellow", 100, );
function Fruit(name, color, price, discountMonths) {
    this.name = "mango";
    this.color = "yellow";
    this.price = 100;
    this.discountMonths = [6, 7];
    this.mart = function (fruitdiscount) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * fruitdiscount;
                break;
            }
        }
        return bestPrice * 12;
    };
}

var annualPrice = mart.mart(0.8);
console.log("Annual Price:" + annualPrice);











