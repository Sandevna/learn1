const express=require('express');
const bodyParser = require('body-parser');
const errorcontrol = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views','views')
const admindata=require('./routes/admin'); 
const shoproute =require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))
app.use('/admin',admindata.routes); 
app.use(shoproute);

app.use(errorcontrol.get404);

app.listen(1235);