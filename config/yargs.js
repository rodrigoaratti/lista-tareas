const descripcion = { demand: true, alias: 'd' };
const completado = { default: true, alias: 'c' };


const argv = require('yargs').command('crear', "Crea una nueva tarea para realizar", { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Permite borrar un elemento de la lista', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
};