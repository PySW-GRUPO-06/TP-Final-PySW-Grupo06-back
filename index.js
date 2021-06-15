var express = require('express');
var app = express();
const {mongoose} = require('./database')

const cors = require('cors');
const { urlencoded } = require('express');
//middlewares
app.use(express.json({limit:'200mb', extend:true}));
app.use(urlencoded({
    limit:'50mb',
    parameterLimit: 10000000000000,
    extended : true
}))

app.use(cors({origin: 'http://localhost:4200'}));




//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});