var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {

  function sum(array) {
    return array.reduce(function(a,b){
      return a + b;
    });
  }

  var results = {};

  for(var i = 0; i < salesData.length; i++) {
    var provinceSales = sum(salesData[i]["sales"]);
    var provinceTax = provinceSales * taxRates[salesData[i]["province"]];
    var companyName = salesData[i]["name"];
    if(results[companyName]) {
      var currentData = results[companyName];
      results[companyName] = {totalSales: provinceSales + currentData["totalSales"], totalTaxes: provinceTax + currentData["totalTaxes"]};

    } else {
      results[companyName] = {totalSales: provinceSales, totalTaxes: provinceTax};
    }
  }

  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);