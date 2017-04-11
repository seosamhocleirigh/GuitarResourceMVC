
var SheetMusicLibrary = {

    noteArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    stringsArray = ["1", "2", "3", "4", "5", "6"]


    copyNoteArray: function () {
        return RandomNoteLibrary.noteArray.slice();
    },
    copyStringsArray: function () {
        return RandomNoteLibrary.stringsArray.slice();
    },

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

    generateRandomstring: function (array) {
        var string = SheetMusicLibrary.spliceRandomItemFromArray(stringsArrayCopy);
        resetstringsArray();
        return string;
    }

    generateRandomNoteAndDrawOnStave: function (array) {
        var string = generateRandomstring();
        var note = generateRandomNote();
        clearCanvas();
        drawNoteOnStave(note, string);
    }

};