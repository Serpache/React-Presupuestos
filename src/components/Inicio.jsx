import React, { Fragment, useState } from 'react';
import Error from './Error'

const Inicio = ({ guardarPresupuesto, guardarRestante, actualiarInicio }) => {

    //State para la cantidad insertada
    const [ cantidad, guardarCantidad ] = useState(0);

    //State para error
    const [ error, guardarError ] = useState(false);


    //Función para actualizar el presupuesto al escribir
    const definirPresupuesto = (e) =>{
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = (e) =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //Si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualiarInicio(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Inicio;