const app = require('./api/app.js');

const port =  process.env.PORT || 3000

app.listen(port, () => { 
    console.log(`Servidor iniciado en el puerto: ${port}`); 
}); 
