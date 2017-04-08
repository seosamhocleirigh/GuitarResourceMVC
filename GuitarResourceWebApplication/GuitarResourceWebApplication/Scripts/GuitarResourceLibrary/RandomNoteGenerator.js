
    var RandomNoteGenerator = {


        noteArrayCopy:[],

        defaults: {
            buttonNextNote: $("#buttonrandomnote"),
            randomNoteOutputElement: $("#outputboxnotes")
        },
        
        init: function (settings) {
            console.log("Random note generator initialising");
            $.extend(RandomNoteGenerator.defaults, settings);
            RandomNoteGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
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
            var randomNote = RandomNoteLibrary.generateRandomNote(RandomNoteGenerator.noteArrayCopy);
            $(RandomNoteGenerator.defaults.randomNoteOutputElement.selector).text(randomNote);
            if (RandomNoteGenerator.noteArrayCopy.length === 0) 
                RandomNoteGenerator.noteArrayCopy = RandomNoteLibrary.copyNoteArray();
        }
    };