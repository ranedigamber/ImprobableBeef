// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }; 
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// var trace = {
//     x: ["nonalcoholic beer", 
//     "nonalcoholic wine", 
//     "nonalcoholic martini", 
//     "nonalcoholic margarita", 
//     "nonalcoholic rum& coke", 
//     "nonalcoholic mai tai", 
//     "nonalcoholic gin & tonic"], 
//     y: [22.7,
//     17.1,
//     9.9,
//     8.7,
//     7.2,
//     6.1,
//     6.0,
//     4.6
//     ], 
//     type: "bar"
// };

// var data = [trace];

// var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drink Option"},
//     yaxis: {title: "Percentage of total number of orders"}
// };

// var trace = {
//     labels: ["nonalcoholic beer", 
//     "nonalcoholic wine", 
//     "nonalcoholic martini", 
//     "nonalcoholic margarita", 
//     "nonalcoholic rum& coke", 
//     "nonalcoholic mai tai", 
//     "nonalcoholic gin & tonic"], 
//     values: [22.7,
//     17.1,
//     9.9,
//     8.7,
//     7.2,
//     6.1,
//     6.0,
//     4.6
//     ], 
//     type: 'pie'
// };

// var data = [trace];

// var layout = {
//     title: "'Pie' Chart",
// }; 

// Plotly.newPlot("plotArea", data, layout);

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    // mode: "markers",
    type: "scatter"
};

// var trace2 = {
//     x: [1, 2, 3, 4], 
//     y: [16, 5, 11, 9],
//     mode: "lines",
//     type: "scatter"
// }; 

// var trace3 = {
//     x: [1,2,3,4],
//     y: [12, 9, 15, 12], 
//     mode: "lines+markers",
//     type: "scatter"
// };

// var layout = {
//     title = "'Scatter' Chart",
//     xaxis: {title: "Runs"},
//     yaxis: {title: "Balls Faced"}
// }; 

// var data = [trace1];

// Plotly.newPlot("plotArea", data);

var numbers = [1,2,3,4];
var squares = numbers.map(numbers => number**2);
console.log(squares);

var numbers = [0,2,4,6,8];
var addtion = numbers.map(function(add) {
    return(numbers+5)
});

// 
var numbers = [1,2,3,4,5];
var larger = numbers.filter(numbers => numbers > 1);
console.log(larger);

// 
var familyAge = [2, 3, 39, 37, 9];

var olderThanFive = familyAge.filter(familyAge => familyAge > 5);

console.log(olderThanFive);

// 
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var speciesS = words.filter(words => words.startsWith("s"));
speciesS;

// sort function: ascending
var familyAge = [2, 3, 39, 37, 9];

var familySort = familyAge.sort((a,b) => a-b);

console.log(familySort);

// sort function descending

var familyAge = [3,2,39,37,9];
var familySortDesc = familyAge.sort((a,b) => b-a);
console.log(familySortDesc);

// slice method
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var wordSlice = words.slice(0,3);
console.log(wordSlice);

