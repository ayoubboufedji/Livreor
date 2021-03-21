const { response } = require('express');
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

app.get('/', (request, response) => {
  // ejs
  response.render('pages/index', { test: 'salut' });

  //response.send('salut');
});

app.post('/',(request,response) => {

  console.log(request)


})

app.listen(8080);
