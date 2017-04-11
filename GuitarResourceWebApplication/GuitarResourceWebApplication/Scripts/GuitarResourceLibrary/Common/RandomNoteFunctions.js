
var RandomNoteLibrary = {

    noteArray: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    naturalArray: ["A", "B", "C", "D", "E", "F", "G"],
    stringsArray: ["1", "2", "3", "4", "5", "6"]



    copyNoteArray: function () {
        return RandomNoteLibrary.noteArray.slice();
    },
    copyNaturalArray: function () {
        return RandomNoteLibrary.naturalArray.slice();
    },
    copyStringsArray: function () {
        return RandomNoteLibrary.stringsArray.slice();
    },



    pickRandomItemFromArray: function (array) {
        var itemIndex = Math.floor(Math.random() * array.length);
        return array[itemIndex];
    },

    spliceRandomItemFromArray: function (array) {
        var randomItem = RandomNoteLibrary.pickRandomItemFromArray(array);
        var index = array.indexOf(randomItem);
        array.splice(index, 1);
        return randomItem;
    },

    generateRandomNote: function (array) {
        var note = RandomNoteLibrary.spliceRandomItemFromArray(array);
        //RandomNoteLibrary.resetNoteArray(array);
        return note;
    }

};