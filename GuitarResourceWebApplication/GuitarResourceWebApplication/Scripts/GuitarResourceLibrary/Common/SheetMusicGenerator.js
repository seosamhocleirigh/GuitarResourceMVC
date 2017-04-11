
var SheetMusicGenerator = {

    noteArrayCopy: [],
    stringsArrayCopy: [],

    defaults: {
        buttonNextNote: $("#buttonrandomsheetmusic"),
        vexflowOutputElement: $("#boo")
    },

    init: function (settings) {
        console.log("Random note generator initialising");
        $.extend(SheetMusicGenerator.defaults, settings);
        SheetMusicGenerator.noteArrayCopy = SheetMusicLibrary.copyNoteArray();
        SheetMusicGenerator.stringsArrayCopy = SheetMusicLibrary.copyStringsArray();

       
    },

    bindUIActions: function () {
        console.log("binding UI");
        $(SheetMusicGenerator.defaults.buttonNextNote.selector).click(function () {
            SheetMusicGenerator.outputRandomNoteToUI();
        })
    },

    outputRandomNoteToUI: function () {
        console.log("output to UI fired");
        var randomNote = "";

        if (SheetMusicGenerator.stringsArrayCopy.length === 0)
            SheetMusicGenerator.stringsArrayCopy = SheetMusicLibrary.copyStringsArray.slice();
        if (SheetMusicGenerator.noteArrayCopy.length === 0)
            SheetMusicGenerator.noteArrayCopy = SheetMusicLibrary.copyNoteArray.slice();
    }
}