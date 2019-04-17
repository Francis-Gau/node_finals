const express = require('express');
const hbs = require('hbs');
const cards = require('./cards.js')
const nasa = require('./nasa_api.js')

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index.hbs');
})
app.get('/cards/:num_cards', (request, response) => {
    cards.card_draw(request.params.num_cards).then((resolved) => {
        var cards = {}
        for(var x = 0; x < request.params.num_cards; x++){
            cards[x] = resolved.cards[x].images.png
        }
        response.render("cards.hbs",{
            length: request.params.num_cards,
            replace: cards
        })
    }).catch((e) => {
        console.log(e);
    });
})

app.get('/nasa/:search', (request, response) => {
    nasa.image_api(request.params.search).then((resolved) => {
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
        response.render("nasa.hbs",{
            length: lengthy,
            replace: images
        })
    }).catch((e) => {
        console.log(e);
    });
})


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is up');
});