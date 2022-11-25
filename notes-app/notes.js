const fs = require('fs');

const chalk= require('chalk');

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
    const notes = loadNotes();

    const doublicatedNotes=notes.filter(note =>note.title===title);

    debugger

    if (doublicatedNotes.length > 0) {
        console.log('Note title taken')
        return;
    }

    notes.push(
        {
            title, body
        }
    );

    saveNotes(notes);
    console.log('New note added')

}
const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep=notes.filter(note =>note.title!==title);
   
    if (notesToKeep.length !== notes.length){
        saveNotes(notesToKeep);
        console.log(chalk.red.inverse(`Note title ${title} have been removed`));
    }
}
const saveNotes = (notes) => {
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (e) {
        return [];
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNote,

}