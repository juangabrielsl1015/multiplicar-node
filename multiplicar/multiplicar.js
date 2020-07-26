//Requireds - Paquetes importados
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para la base: ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para el límite: ${base} no es un número`);
            return;
        }

        for (var i = 0; i <= limite; i++) {
            var resultado = base * i;
            console.log(`${base} * ${i} = ${resultado}\n`);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (var i = 1; i <= limite; i++) {
            var resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}