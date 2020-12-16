import React, { useState } from 'react';
import Inicio from './components/Inicio'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {

  //State para presupuesto inicial
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  //State para presupuesto restante
  const [ restante, guardarRestante ] = useState(0);
  //State para ocultar o mostrar componente
  const [ mostrarInicio, actualiarInicio] = useState(true);
  //State para los gastos
  const [ gastos, guardarGastos ] = useState([]);

  //Agregar nuevo gasto
  const agregarGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

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
                  agregarGasto={agregarGasto}
                  />
                </div>
                <div className="one-half column">
                <Listado 
                  gastos={gastos}
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
