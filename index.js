const express = require ('express');
const port = 8080;
const app = express();

app.get('/produtos', (req, res, next) => {
    res.send([
        { nome: 'camiseta', preco: 59.99},
        { nome: 'Short tactel', preco: 39.99}
    ]);
});
app.listen(port, () =>{
    console.log('listening on port' + port);
})