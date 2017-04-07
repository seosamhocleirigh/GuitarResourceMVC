
var RandomNoteLibrary = {

    noteArray: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    naturalArray: ["A", "B", "C", "D", "E", "F", "G"],
    stringsArray: ["1", "2", "3", "4", "5", "6"],

    pickRandomItemFromArray: function (array) {
        var itemIndex = Math.floor(Math.random() * array.length);
        return array[itemIndex];
    },

    spliceRandomItemFromArray: function (array) {
        var randomItem = pickRandomItemFromArray(array);
        var index = array.indexOf(randomItem);
        array.splice(index, 1);
        return randomItem;
    },

    generateRandomNote: function (array) {
        var note = spliceRandomItemFromArray(array);
        resetnoteArray();
        return note;
    }

};