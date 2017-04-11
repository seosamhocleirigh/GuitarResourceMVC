
var RandomNoteGenerator = {


    noteArrayCopy: [],
    naturalArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNote: $("#buttonrandomnote"),
        randomNoteOutputElement: $("#outputboxnotes"),
        randomStringOutputElement: $("#outputboxstring"),
        naturalCheckBoxElement: $("#natural notes"),
        stringCheckBoxElement: $("#strings")

    },

    init: function (settings) {
        console.log("Random note generator initialising");
        $.extend(RandomNoteGenerator.defaults, settings);
        RandomNoteGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
        RandomNoteGenerator.naturalArrayCopy = RandomNoteLibrary.copyNaturalArray();
        RandomNoteGenerator.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
        RandomNoteGenerator.bindUIActions();
    },

    bindUIActions: function () {
        console.log("binding UI");
        $(RandomNoteGenerator.defaults.buttonNextNote.selector).click(function () {
            RandomNoteGenerator.outputRandomNoteToUI();
        })
    },

    outputRandomNoteToUI: function () {
        console.log("output to UI fired");
        var randomNote = "";

        if (RandomNoteGenerator.defaults.naturalCheckBoxElement.prop("checked")) {
            randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.naturalArrayCopy);
        } else {
            randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.noteArrayCopy);
        }

        $(RandomNoteGenerator.defaults.randomNoteOutputElement.selector).text(randomNote);

        if (RandomNoteGenerator.defaults.stringCheckBoxElement.prop("checked")) {
            randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.stringsArrayCopy);
            $(RandomNoteGenerator.defaults.randomStringOutputElement.selector).text(randomNote);
        }

        if (RandomNoteGenerator.naturalArrayCopy.length === 0)
            RandomNoteGenerator.naturalArrayCopy = RandomNoteLibrary.copyNaturalArray();
        if (RandomNoteGenerator.noteArrayCopy.length === 0)
            RandomNoteGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
        if (RandomNoteGenerator.stringsArrayCopy.length === 0)
            RandomNoteGenerator.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
    }
};
  



        
 