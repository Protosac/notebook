// Select the chart container
// Define the selection which we will join data to 
// Join the data to the select with `data`
// Instantiate elements with enter()
// Append the data to enter() selection
// Create functions to determine bar width (chart size based) and length (data-based)

var dataArray;

var canvas = d3.select("body")
							 .append("svg")
							 .attr("width", 500)
							 .attr("height", 500);

var bars = canvas.selectAll("rect")
					 .data(dataArray)
					 .enter()