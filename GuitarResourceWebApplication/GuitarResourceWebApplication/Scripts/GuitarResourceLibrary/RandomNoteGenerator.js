
var RandomNoteGenerator = {


    noteArrayCopy: [],
    naturalArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNote: $("#buttonrandomnote"),
        randomNoteOutputElement: $("#outputboxnotes"),
        randomStringOutputElement: $("#outputboxstring")

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
        if ($("[name='natural notes']").prop("checked")) {
            var randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.naturalArrayCopy);
            $(RandomNoteGenerator.defaults.randomNoteOutputElement.selector).text(randomNote);
        } else {
            var randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.noteArrayCopy);
            $(RandomNoteGenerator.defaults.randomNoteOutputElement.selector).text(randomNote);
        }
        if (RandomNoteGenerator.noteArrayCopy.length === 0)
            RandomNoteGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
    }
};
  



        
 