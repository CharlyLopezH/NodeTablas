const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: '-b opción para número base.',
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption: true,
        describe: '-h hasta qué número de la serie.',
    })
    .option('l',{
        alias:'listar',
        type:'boolean',        
        default:false,
        describe: '-l Imprime listado (default false).',
    }).argv;

    module.exports = argv;