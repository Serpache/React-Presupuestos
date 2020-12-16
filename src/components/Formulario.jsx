import React, { useState } from 'react';
import shortid from "shortid"
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    //States para el formulario
    const [ nombre, guardarNombre ] = useState("");
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Agregar gasto
    const nuevoGasto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
            guardarError(true);
            return;
        }

        guardarError(false);

        //Construir el gasto, no es necesario nombre:nombre al llamarse igual
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Pasar a componente princial
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Reiniciar formulario
        guardarNombre("");
        guardarCantidad(0);
    }

    return (  
        <form
            onSubmit={nuevoGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />

        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;