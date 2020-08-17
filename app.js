const argv = require('./config/yargs').argv;
// const colors = require('colors');
const colors = require('colors/safe');



const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:

        console.log('Comando no reconocido');
        break;
}




//*****************************************
// NOTA:

//para crear el package.json se ejecuta en consola npm unit 
// luego de crear este documento instalamos yargs npm  ==== npm i yargs === luego el comando npm install
//luego se instala la dependecia de desarrollo de nodemon ==== npm install --save-dev nodemon
//o para desintalar seria npm uninstall nodemon

//*****************************************
// console.log(process.argv);

// NOTA: Para correrlo desde consola  es node o nodemon app --base=5 o cualquier numero(n)
// let argv2 = process.argv;
// console.log(argv.base);





// let parametro = argv[2];
// let base = parametro.split('=')[1]

// split === separa el texto en un arreglo