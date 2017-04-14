
var SheetMusicGenerator = {

    noteArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNote: $("#buttonrandomsheetmusic"),
        vexflowOutputElement: $("#boo")
    },

    init: function (settings) {
        console.log("Sheet music generator initialising");
        $.extend(SheetMusicGenerator.defaults, settings);
        SheetMusicGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
        SheetMusicGenerator.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
        SheetMusicGenerator.bindUIActions();
    },

    bindUIActions: function () {
        console.log("binding UI");
        $(SheetMusicGenerator.defaults.buttonNextNote.selector).click(function () {
            SheetMusicGenerator.outputRandomNoteToUI();
        });
    },

    outputRandomNoteToUI: function () {
        console.log("output to UI fired");
      
        SheetMusicLibrary.generateRandomNoteAndDrawOnStave(SheetMusicGenerator.noteArrayCopy,
            SheetMusicGenerator.stringsArrayCopy,
            SheetMusicGenerator.defaults.vexflowOutputElement);

        if (SheetMusicGenerator.stringsArrayCopy.length === 0)
            SheetMusicGenerator.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
        if (SheetMusicGenerator.noteArrayCopy.length === 0)
            SheetMusicGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
    }
}