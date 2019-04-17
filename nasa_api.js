const axios = require("axios");

const image_api = (var_x) => {
    return new Promise((resolve, reject) => {
        axios.get('https://images-api.nasa.gov/search?q=' + var_x)
        .then(function (response) {
            resolve(response.data.collection.items)
        })
        .catch(function (error) {
            reject(error);
        });
    });
};
/*
image_api("hello").then((resolved) => {
    var images = {}
    var lengthy = resolved.length
    for(var x = 0; x < lengthy; x++){
        try{
            images[x] = resolved[x].links[0].href
        }catch{
            continue
        }
        console.log(resolved[x].links[0].href);
    }
    response.render("nasus.hbs",{
        length: lengthy,
        replace: images
    })
}).catch((e) => {
    console.log(e);
});
*/
module.exports = {
    image_api
}
