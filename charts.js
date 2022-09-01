function init() {
  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    let sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    let firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    let metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    let samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    let result = resultArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let PANEL = d3.select("#sample-metadata");
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    let yticks = otu_ids.slice(0,10).map(otuID => 'OTU ${otuID}').reverse();

    // 8. Create the trace for the bar chart. 
    var barData = [
        {
            y: yticks,
            x: sample_values.slice(0,10).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: 'bar',
            orientation: "h",
        }
      
    ];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     width: 500, height: 500,
     title: "Top 10 Bacterial Cultures",
     margin: {t: 30, l: 150}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newplot("bar", barData, barLayout);

    // Bar and Bubble charts
  
      // 1. Create the trace for the bubble chart.
      let bubbleData = [
        {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Navy"
            }
        }
     
      ];
  
      // 2. Create the layout for the bubble chart.
      let bubbleLayout = {
        title: "Bacterial Culture Per Sample",
        margin: {t:0},
        hovermode: "closest",
        xaxis: {title: "OTU ID"},
        margin: {t:30}
        
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      
      
      // 4. Create the trace for the gauge chart.
    let gaugeData = [
        {
            domain: {x: [0,1], y: [0,1]},
            value: washing_frequency,
            type: "indicator",
            mode: "gauge+number",
            title: {text: "<b> Belly Button Washing Frequency</b> <br> # of Scrubs per Week</br>"},
            guage: {
                axis: {range: [null, 0], tickwidth: 2, tickcolor: "black"},
                bar: {color: "black"},
                steps: [
                    {range: [0,2], color: "firebrick"},
                    {range: [2,4], color: "darkorange"},
                    {range: [4,6], color: "greenyellow"},
                    {range: [6,8], color: "lightseagreen"},
                    {range: [8,10], color: "dodgerblue"}

                ],
                threshold: {
                    value: washing_frequency,
                }
            },
        }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    let gaugeLayout = { 
     width: 600, height: 500, margin: {t:0, b:0},
     font: {color: "black"}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
