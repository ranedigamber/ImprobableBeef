console.log(data);

// Trace1 for the Greek Data
var Greek = {
    x: data.map(row => row.pair), 
    y: data.map(row.searchResults)
    type: 'bar'
};

// Trace 2 for the Roman Data
var roman = {
    x: data.map(row => row.pair), 
    y: data.map(row.searchResults)
    type: 'bar'
};

// Combining both traces


// Apply the group barmode to the layout


// Render the plot to the div tag with id "plot"
