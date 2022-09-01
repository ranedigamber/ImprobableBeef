// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));
// d3.json(url).then(let var = receivedData);
// // d3.json(url).then(spaceXResult);
// // var spaceXResult = spaceXResult.map(spaceXResult => console.log(spaceXResult.location));

// d3.json(url).then(function(spaceXResults) {
//     results = spaceXResults.map(loCation => loCation.location)
// } => console.log(spaceXResults[0].location.latitude));
// d3.json(url).then(function(APIresult) {

// })

d3.json('samples.json').then(function(data){
    console.log(data);
});
