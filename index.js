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

app.use('/api/alumno', require('./routes/alumno.route'));
app.use('/api/persona', require('./routes/persona.route'));
app.use('/api/asistencia', require('./routes/asistencia.route'));
app.use('/api/cuota', require('./routes/cuota.route'));
app.use('/api/ejercicio', require('./routes/ejercicio.route'));
app.use('/api/entrenador', require('./routes/entrenador.route'));
app.use('/api/plan', require('./routes/plan.rote'));
app.use('/api/rutina', require('./routes/rutina.route'));
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/dia', require('./routes/dia.route'));
app.use('/api/dieta',require('./routes/dieta.route'));
app.use('/api/registroDieta',require('./routes/registroDieta.route'));
app.use('/api/dietaEstablecida', require('./routes/dietaEstablecida.route'));
app.use('/api/noticia', require('./routes/noticia.route'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});