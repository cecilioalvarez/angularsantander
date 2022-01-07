const express = require('express')
var cors = require("cors"); //cors
var bodyParser=require("body-parser");
const app = express()
app.use(cors()); //cors
app.use(bodyParser.json()); //que permite a node leer json
const port = 3000
let facturas=[];
let  f1= {numero:1,concepto:"tablet",importe:200};
let  f2= {numero:2,concepto:"ordenador",importe:600};
facturas.push(f1,f2);

app.get('/facturas', (req, res) => {
  res.send(facturas)
})
app.post("/facturas",function(req,res) {

    facturas.push(req.body);
    res.status(201).send();

})
app.put("/facturas/:numero",function(req,res) {


  let seleccionado=null;
  for (let i=0;i<facturas.length;i++) {

    if (facturas[i].numero==req.params.numero) {

        seleccionado=facturas[i];
        break;
    }
  
  }
  console.log(seleccionado);
  console.log(req.body);
  if(seleccionado!=null){
    seleccionado.numero=req.body.numero;
    seleccionado.concepto=req.body.concepto
    seleccionado.importe =req.body.importe;
    console.log(facturas);
  }
  res.status(200).send();

})

//añademe al api rest un metodo de delete 
app.delete("/facturas/:numero",function(req,res) {

    let seleccionado=-1;
    for (let i=0;i<facturas.length;i++) {

      if (facturas[i].numero==req.params.numero) {

          seleccionado=i;
      }
    
    }
    if(seleccionado!=-1)
    facturas.splice(seleccionado,1);
    res.status(204).send();

});

app.get("/facturas/:numero",function(req,res) {

  let factura={};
  for (let i=0;i<facturas.length;i++) {

    if (facturas[i].numero==req.params.numero) {

        factura=facturas[i];
    }
  
  }
  res.send(factura);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})