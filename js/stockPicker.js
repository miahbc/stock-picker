function stock(prices) {
    let prices2 = []
    for (let i=0; i<prices.length; i++) {
        prices2.push([prices[i],i])
    }
    console.log(prices2)
    prices3 = prices2.sort((a,b) => a > b)
    console.log(prices3)
}

console.log(stock([17,3,6,9,15,8,6,1,10]))