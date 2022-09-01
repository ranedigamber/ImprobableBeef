// Create an array of each country's numbers
let us = Object.values(data.us);
let uk = Object.values(data.uk);
let canada = Object.values(data.canada);

// Create an array of music provider labels
let providerLables = Object.keys(data.us); 

// Display the default plot


// On change to the DOM, call getData()
d3.selectAll("#selectOption").on("change", updatePlotly);

// Function called by DOM changes
function updatePlotly() {

// Assign the value of the dropdown menu option to a variable
  let dropdownMenu = d3.select("#selectOption");
  let dataset = dropdownMenu.property("value");
// Initialize an empty array for the country's data

// Update the restyled plot's values
