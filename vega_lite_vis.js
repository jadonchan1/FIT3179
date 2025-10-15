var vg_1 = "https://raw.githubusercontent.com/jadonchan1/FIT3179/main/visualization.vl.json";
var vg_2 = "https://raw.githubusercontent.com/jadonchan1/FIT3179/refs/heads/main/visualization.vl%20(2).json";
var vg_3 = "https://raw.githubusercontent.com/jadonchan1/FIT3179/refs/heads/main/Domestic%20visitors%20by%20state.json";

vegaEmbed("#map", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar", vg_2).then(function(result) {
}).catch(console.error);

vegaEmbed("#map", vg_3).then(function(result) {
}).catch(console.error);