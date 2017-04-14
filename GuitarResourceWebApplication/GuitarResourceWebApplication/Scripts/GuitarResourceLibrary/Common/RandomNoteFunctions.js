
var RandomNoteLibrary = {

    noteArray: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    naturalNoteArray: ["A", "B", "C", "D", "E", "F", "G"],
    stringsArray: ["1", "2", "3", "4", "5", "6"],



    copyNoteArray: function () {
        return RandomNoteLibrary.noteArray.slice();
    },
    copyNaturalArray: function () {
        return RandomNoteLibrary.naturalNoteArray.slice();
    },
    copyStringsArray: function () {
        return RandomNoteLibrary.stringsArray.slice();
    },



    _pickRandomItemFromArray: function (array) {
        var itemIndex = Math.floor(Math.random() * array.length);
        return array[itemIndex];
    },

    _spliceRandomItemFromArray: function (array) {
        var randomItem = RandomNoteLibrary._pickRandomItemFromArray(array);
        var index = array.indexOf(randomItem);
        array.splice(index, 1);
        return randomItem;
    },

    generateRandomItemFromArray: function (array) {
        var note = RandomNoteLibrary._spliceRandomItemFromArray(array);
        return note;
    }

    //generateRandomNote: function () {
    //    RandomNoteLibrary.generateRandomItemFromArray(RandomNoteLibrary.noteArray);
    //},

    //generateRandomString: function () {
    //    RandomNoteLibrary.generateRandomItemFromArray(RandomNoteLibrary.stringsArray);
    //}
};