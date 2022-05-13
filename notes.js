const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("New note added!"))
    } else {
        console.log(chalk.bgRed("Note title taken!"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length > 0) {
        removedNoteList = notes.filter(note => {
            return note.title !== title
        })
        saveNotes(removedNoteList)
        console.log(chalk.bgGreen("Note with title: " + title + " is removed"))
    } else {
        console.log(chalk.white.bgRed("Note with title: " + title + " is not present"))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const matchNote = notes.filter(note => note.title === title)
    if (matchNote.length > 0) {
        console.log(chalk.green.inverse("Found the note!"))
        console.log("Note body: " + matchNote[0].body)
    } else {
        console.log(chalk.red.inverse("Note with title: " + title + " is not present"))
    }

}

const getNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        notes.map(note => console.log(chalk.white.inverse("Title:") + " " + note.title))
    } else {
        console.log(chalk.red.inverse("No notes present"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}


module.exports = {
    addNotes: addNotes,
    getNotes: getNotes,
    removeNote: removeNote,
    readNote: readNote
}

