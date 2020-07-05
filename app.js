const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('-----------  TAREA  ----------------'.green);
            console.log(tarea.descripcion);
            console.log(`Estado ${tarea.completado}`)
            console.log('------------------------------------'.green);
        }

        break;
    case 'actualizar':
        resultado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);
        break;

    case 'borrar':
        resultado = toDo.borrar(argv.descripcion);
        console.log(resultado);
        break;

    default:
        console.log("Comando desconocido");

        break;
}