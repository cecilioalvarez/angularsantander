const express = require('express')
var cors = require("cors"); //cors
const app = express()
app.use(cors()); //cors
const port = 3000
let facturas=[];
let  f1= {numero:1,concepto:"tablet",importe:200};
let  f2= {numero:2,concepto:"ordenador",importe:600};
facturas.push(f1,f2);

app.get('/facturas', (req, res) => {
  res.send(facturas)
})
app.delete("/facturas/:numero",function(req,res) {

    let seleccionado=0;
    for (let i=0;i<facturas.length;i++) {

      if (factura.numero==req.params.numero) {

          seleccionado=i;
      }
    
    }
    facturas.splice(seleccionado,1);
    res.status(204).send()




});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})