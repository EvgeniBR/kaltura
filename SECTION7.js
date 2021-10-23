//A. What is the revenue for the month?
// Revenue is calculated according to the monthly price of the reserved offices.
// If an office is partially reserved for a given month, the revenue should be prorated based on the monthly price.
// For example: 2, 1500, 2014-03-01, 2014-04-15 counts as $750 in revenue for April because the reservation was for half of the month.


//B. What is the total capacity of the unreserved offices for the month?
// An office is considered reserved if it was reserved even for a single day for the given month.


const fs = require('fs');
const readlineSync = require('readline-sync');


fs.readFile("./data.csv", "utf8", (err, data) => {
  if (err) throw err;
const myData = data.split('\n')
let unreserved = 266;
let revenue = 0
const date = readlineSync.question('Please insert a date to evaluate month and a year (YYYY-MM):  ')
filterByValue(jsonDataArray(myData),date).forEach(element => {
  revenue += parseInt(element['Monthly Price'])
  unreserved -= parseInt(element.Capacity)
});

console.log(`${date}: expected revenue: ${revenue}, expected total capacity of the unreserved offices: ${unreserved}`)
});


function jsonDataArray(array) {
  const headers = array[0].split(',');
  const jsonData = [];
  for ( let i = 1, length = array.length; i < length; i++ )
  {
    const row = array[i].split(',');
    const data = {};
    for ( let x = 0; x < row.length; x++ )
    {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);
  }
  return jsonData;
}

function filterByValue(array, date) {
  return array.filter(o =>
      Object.keys(o).some(k => o[k].includes(date)));
}




//* 2013-01:expected revenue: 0, expected total capacity of the unreserved offices: 266
//* 2013-06:expected revenue: 2500, expected total capacity of the unreserved offices: 262
//* 2014-03:expected revenue: 3200, expected total capacity of the unreserved offices: 260
//* 2014-09:expected revenue: 4300, expected total capacity of the unreserved offices: 260
//* 2015-07:expected revenue: 1500, expected total capacity of the unreserved offices: 264


//1. How much time did you spend? 4 hours on all assignments
//2. What was the most difficult thing for you? submiting half work due to the lack of time , not knowing sql , and submiting 
// plane nodeJS\JavaScript instead of a full working react project with front and backend 
//3.What technical debt would you pay if you had one more iteration? it would have taken much more time to submit