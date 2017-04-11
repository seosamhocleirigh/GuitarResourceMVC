
var SheetMusicLibrary = {

    noteArray =["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    stringsArray =["1", "2", "3", "4", "5", "6"]



     copyNoteArray: function () {
        return SheetMusicLibrary.noteArray.slice();
    },
    copyStringsArray: function () {
        return SheetMusicLibrary.stringsArray.slice();
    },


    clearCanvas: function () {
        canvas.innerText = "";
    }

resetNoteArray: function (array) {
        if (noteArrayCopy.length === 0)
            noteArrayCopy = noteArray.slice();

    }

pickRandomItemFromArray: function (array) {
        var itemIndex = Math.floor(Math.random() * array.length);
        return array[itemIndex];
    },

spliceRandomItemFromArray: function (array) {
        var randomItem = SheetMusicLibrary.pickRandomItemFromArray(array);
        var index = array.indexOf(randomItem);
        array.splice(index, 1);
        return randomItem;
    }

generateRandomNote: function (array) {
        var note = SheetMusicLibrary.spliceRandomItemFromArray(noteArrayCopy);
        resetNoteArray();
        return note;
    }

generateRandomNoteAndDrawOnStave: function () {
        var note = SheetMusicLibrary.spliceRandomItemFromArray(array);
        var string = generateRandomstring();
        var note = generateRandomNote();
        clearCanvas();
        drawNoteOnStave(note, string);
    }
};

