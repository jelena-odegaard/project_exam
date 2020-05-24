const mrpUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lh80h9nRv18lfxOy9T6BUPRjYcGVGYU7RmDHhltH";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + mrpUrl;

function getMrp() {
    fetch(corsEnabledUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

getMrp();

const container = document.querySelector(".container");
let newHTML = "";

var json = {
    jsonData: [{
        0: [{... }]
    }, {
        1: [{... }]
    }, {
        3: [{... }]
    }]
};

for (var i = 0; i < json.jsonData.length; i++) {
    for (var key in json.jsonData[i]) {
        for (var j = 0; j < json.jsonData[i][key].length; j++) {
            console.log(json.jsonData[i][key][j])
        }
    }
}