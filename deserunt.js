// Assuming we have a scale object from a library like D3.js
const scale = d3.scaleLinear().domain([0, 100]).range([0, 500]);

// Retrieve the domain of the scale
let domain = scale.domain(); // [0, 100]

// Function to get the last element of an array
function peek$1(array) {
    return array[array.length - 1];
}

// Function to calculate a fraction (implementation is hypothetical)
function scaleFraction(scale, start, end) {
    return (end - start) / scale.range()[1];
}

// Calculate the fraction
let fraction = scaleFraction(scale, domain[0], peek$1(domain));

// Check the number of automatically generated labels
let labels = d3.ticks(domain[0], peek$1(domain), 10); // Generates 10 ticks
if (labels.length <= 2) {
    console.log('Special handling for 2 or fewer labels required');
} else {
    console.log('Normal label handling');
}
