const yargs = require('yargs')

yargs.command({
    command: '$0',
    handler: (argv) => console.log('Note a valid command')
})

yargs.command({
    command: 'test',
    describe: 'test command',
    handler: (argv) => console.log('valid command')
})

yargs.parse()