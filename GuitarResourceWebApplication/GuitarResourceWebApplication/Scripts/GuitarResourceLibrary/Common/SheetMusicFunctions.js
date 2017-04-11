
var SheetMusicLibrary = {

    noteArray: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    stringsArray: ["1", "2", "3", "4", "5", "6"],


    copyNoteArray: function () {
        return SheetMusicLibrary.noteArray.slice();
    },
    copyStringsArray: function () {
        return SheetMusicLibrary.stringsArray.slice();
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

     generateRandomNote: function (array) {
         var note = SheetMusicLibrary.spliceRandomItemFromArray(array);
        resetNoteArray();
        return note;
    }

    generateRandomstring: function (array) {
        var string = SheetMusicLibrary.spliceRandomItemFromArray(array);
        resetstringsArray();
        return string;
    }

    generateRandomNoteAndDrawOnStave: function (array) {
        var string = SheetMusicLibrary.generateRandomstring();
        var note = SheetMusicLibrary.generateRandomNote();
        clearCanvas();
        drawNoteOnStave(note, string);
    }

};