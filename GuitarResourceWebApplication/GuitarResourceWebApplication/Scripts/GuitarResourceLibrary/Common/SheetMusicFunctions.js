
var SheetMusicLibrary = {

    submitInputBoxSelector: '#noteinput',
    resultDisplaySelector: '#truefalsedisplay',
    generatedNote: "",

    clearCanvas: function (canvasElement) {
        canvasElement.empty();
    },

    generateRandomNoteAndDrawOnStave: function (noteArrayCopy, stringArrayCopy, canvasElement) {
        this.generatedNote = RandomNoteLibrary.generateRandomItemFromArray(noteArrayCopy);
        var string = RandomNoteLibrary.generateRandomItemFromArray(stringArrayCopy);
        
        SheetMusicLibrary.clearCanvas(canvasElement);
        SheetMusicLibrary.drawNoteOnStave(this.generatedNote, string, canvasElement);
    },

    drawNoteOnStave: function (note, string, canvasElement) {
        VF = Vex.Flow;
        var canvasElementJS = $(canvasElement.selector).get(0);
        var renderer = new VF.Renderer(canvasElementJS, VF.Renderer.Backends.SVG);

        renderer.resize(400, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        var staveNote = new VF.StaveNote({ keys: [note + "/" + string], duration: "q" });

        if (note.indexOf("#") > -1) {
            staveNote.addAccidental(0, new VF.Accidental("#"));
        } else if (note.indexOf("b") > -1) {
            staveNote.addAccidental(0, new VF.Accidental("b"));
        }

        var notes = [
            staveNote
        ];

        var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
        voice.addTickables(notes);

        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
        voice.draw(context, stave);
    },

    checkField: function () {
        console.log("Checkfield Fired");
        var userInput = $(this.submitInputBoxSelector).val();
        var capitalise_userInput = userInput.charAt(0).toUpperCase() + userInput.charAt(1).toLowerCase();
        if (this.generatedNote === capitalise_userInput) {
            $(this.resultDisplaySelector).html("Correct").css('color', 'green');
        } else {
            $(this.resultDisplaySelector).html("Incorrect").css('color', 'red');
        }
    }
};