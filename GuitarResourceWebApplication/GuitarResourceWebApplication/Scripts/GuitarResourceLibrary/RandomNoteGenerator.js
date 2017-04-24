
var RandomNoteGenerator = {


    noteArrayCopy: [],
    naturalArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNote: $("#buttonrandomnote"),
        randomNoteOutputElement: $("#outputboxnotes"),
        randomStringOutputElement: $("#outputboxstring"),
        naturalCheckBoxSelector: '#naturalnotescheckbox',
        stringsCheckBoxSelector: '#stringscheckbox'
    },

    init: function (settings) {
        console.log("Random note generator initialising");
        $.extend(this.defaults, settings);
        this.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
        this.naturalArrayCopy = RandomNoteLibrary.copyNaturalArray();
        this.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
        this.bindUIActions();
    },

    bindUIActions: function () {
        console.log("binding UI");
        $(this.defaults.buttonNextNote.selector).click(function () {
            RandomNoteGenerator.outputRandomNoteToUI();
        })
    },

    outputRandomNoteToUI: function () {
        console.log("output to UI fired");
        var randomNote = "",
            naturalCheckBoxElement = $(RandomNoteGenerator.defaults.naturalCheckBoxSelector),
            stringsCheckBoxElement = $(RandomNoteGenerator.defaults.stringsCheckBoxSelector);

        if (naturalCheckBoxElement.prop("checked")) {
            randomNote = RandomNoteLibrary.generateRandomItemFromArray(RandomNoteGenerator.naturalArrayCopy);
        } else {
            randomNote = RandomNoteLibrary.generateRandomItemFromArray(RandomNoteGenerator.noteArrayCopy);
        }

        $(RandomNoteGenerator.defaults.randomNoteOutputElement.selector).text(randomNote);

        if (stringsCheckBoxElement.prop("checked")) {
            randomNote = RandomNoteLibrary.generateRandomItemFromArray(RandomNoteGenerator.stringsArrayCopy);
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
  



        
 