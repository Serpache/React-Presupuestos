export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if( (presupuesto / 4) > restante ) {
        clase = "aler alert-danger";
    } else if( (presupuesto / 2) > restante ) {
        clase = "aler alert-warning";
    } else {
        clase = "aler alert-success";
    }

    return clase;
}