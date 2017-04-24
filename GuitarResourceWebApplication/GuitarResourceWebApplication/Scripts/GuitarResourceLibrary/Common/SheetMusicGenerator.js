
var SheetMusicGenerator = {

    noteArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNoteSelector: "#buttonrandomsheetmusic",
        vexflowOutputSelector: "#boo"
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
        $(SheetMusicGenerator.defaults.buttonNextNoteSelector).click(function () {
            SheetMusicGenerator.outputRandomNoteToUI();
        });
    },

    outputRandomNoteToUI: function () {
        console.log("output to UI fired");
      
        SheetMusicLibrary.generateRandomNoteAndDrawOnStave(SheetMusicGenerator.noteArrayCopy,
            SheetMusicGenerator.stringsArrayCopy,
            $(SheetMusicGenerator.defaults.vexflowOutputSelector));

        if (SheetMusicGenerator.stringsArrayCopy.length === 0)
            SheetMusicGenerator.stringsArrayCopy = RandomNoteLibrary.copyStringsArray();
        if (SheetMusicGenerator.noteArrayCopy.length === 0)
            SheetMusicGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
    }
}