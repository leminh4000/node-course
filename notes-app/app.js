const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');

const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add'
    , describe: "Add a new note"
    , builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },

    }
    , handler: (argv) => notes.addNote(argv.title, argv.body)

});
yargs.command({
    command: 'remove'
    , describe: "Remove the note"
    , builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },

    }
    , handler: (argv) => notes.removeNote(argv.title)

});
yargs.command({
    command: 'list'
    , describe: "List the notes"

    , handler: () => {
        console.log('Listing the note');
    }
});
yargs.command({
    command: 'read'
    , describe: "Read the note"
    , handler: () => {
        console.log('Reading the note');
    }
});
yargs.parse();
// console.log(yargs.argv);
