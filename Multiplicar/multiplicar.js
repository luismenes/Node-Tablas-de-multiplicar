// requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {


    console.log(`======================`.green);
    console.log(`    Tabla del ${ base }`.red);
    console.log(`======================`.green);


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${ base * i}`);

    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El Valor Introducido ${base} no es un Número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${ base * i}\n`);

        }

        // Esta en documentacion de Node
        fs.writeFile(`TablasMultiplicar/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err)

            else
                resolve(`tabla-${base}-al-${limite}`)


        });

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}