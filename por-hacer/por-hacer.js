const fs = require('fs');
const colores = require('colors');

let listadoTareas = [];

const guardarDatos = () => {
    let datos = JSON.stringify(listadoTareas);

    fs.writeFile('./db/data.json', datos, (err) => {
        if (err) {
            throw new Error('No se pudo guardar ', err)
        }
    });


}

const cargarDatos = () => {
    try {
        listadoTareas = require('../db/data.json')
    } catch (error) {
        listadoTareas = [];
    }

}
const crear = (descripcion) => {
    cargarDatos();
    let tarea = { descripcion, completado: false };
    listadoTareas.push(tarea);
    guardarDatos();
    return tarea;
}

const getListado = () => {
    cargarDatos();
    return listadoTareas;
}

const actualizar = (descripcion, estado = true) => {
    cargarDatos();
    let indice = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        listadoTareas[indice].completado = estado;
        guardarDatos();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDatos();
    let indice = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        listadoTareas.splice(indice, 1);
        guardarDatos();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}