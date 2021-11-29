let autos = require('./autos.js');
let persona = require('./personas.js');

let concesionaria = {
  autos: autos,

  // Funcion Etapa 1
  buscarAuto: function(patente){
      let encontrado = null
      this.autos.forEach(function(auto){ if(auto.patente == patente){
       encontrado = auto
        }
         })
          return encontrado
    },
// Funcion Etapa 2
  venderAuto:  function (patente){
     if  (this.buscarAuto(patente) ){  
      return  this.buscarAuto(patente).vendido = true
    }
  },

  // Funcion etapa 3
  autosParaLaVenta: function(){
    return this.autos.filter((function(auto)
      {return auto.vendido === false}),this)
   },
   
   // Autos nuevos 

  autosNuevos: function (){ 
      return this.autosParaLaVenta().filter ( (function (nuevo){
        return nuevo.km < 100
      }),this)
      },
   
   // Funcion lista de ventas (Revisar)   
  
      listaDeVentas: function () {
         listado = []
             for (let i = 0 ; i < this.autos.length ; i++){
             if (this.autos[i].vendido === true){  
             listado.push (autos[i].precio)
         }
           }return listado
             },

   // Funcion de total de ventas 
  totalDeVentas:  function(){ 
    return  this.listaDeVentas().reduce ( function (totalDeVenta,ventas){
       return totalDeVenta + ventas
      },0)
     },
  
     // Funcion combinada con archivo personas
     personas:persona,
 puedeComprar: function(auto,persona){ 
  let costoTotal = auto.precio;
  let autoEnCuotas =auto.cuotas;
  let compradorCuotas = persona.capacidadDePagoEnCuotas;
  let compradorPagoTotal = persona.capacidadDePagoTotal;
  if ( costoTotal <= compradorPagoTotal && 
     (costoTotal/autoEnCuotas) <= compradorCuotas) {
     return true
     console.log(true)
     }else{
      return false
      console.log(false)
      }
      },

      // Funcion combinadora de personas y autos disponibles.
   autosQuePuedeComprar: function(persona){
   let disponible =[]
   this.autosParaLaVenta().forEach(function(auto){
   let posCompra =concesionaria.puedeComprar(auto,persona)
   if (posCompra){
      disponible.push(auto)
      }
       })
     return disponible
        }
}




