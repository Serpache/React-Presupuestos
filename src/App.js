import React, { useState, useEffect } from 'react';
import Inicio from './components/Inicio'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  //State para presupuesto inicial
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  //State para presupuesto restante
  const [ restante, guardarRestante ] = useState(0);
  //State para ocultar o mostrar componente
  const [ mostrarInicio, actualiarInicio] = useState(true);
  //State para los gastos
  const [ gastos, guardarGastos ] = useState([]);
  //States para el gasto y controlar sus cambios
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto] = useState(false);


  //UseEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){

      //Agrega el nuevo gasto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //Resta presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Reiniciar el state de control para que solo se ejecute este código
      //al agregar un gasto desde Formulario
      guardarCrearGasto(false);
    } 
  }, [gasto])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">

          {mostrarInicio ?
            (<Inicio
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualiarInicio={actualiarInicio}
            />) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                <Listado 
                  gastos={gastos}
                  />
                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />  
                </div>
              </div>
            )
          }

        </div>
      </header>
    </div>
  )
}

export default App;
