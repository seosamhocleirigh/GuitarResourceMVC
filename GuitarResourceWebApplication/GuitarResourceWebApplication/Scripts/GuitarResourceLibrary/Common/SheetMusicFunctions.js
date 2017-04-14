
var SheetMusicLibrary = {

    clearCanvas: function (canvasElement) {
        canvasElement.innerText = "";
    },

    generateRandomNoteAndDrawOnStave: function (noteArrayCopy, stringArrayCopy, canvasElement) {
        var note = RandomNoteLibrary.generateRandomItemFromArray(noteArrayCopy);
        var string = RandomNoteLibrary.generateRandomItemFromArray(stringArrayCopy);
        
        SheetMusicLibrary.clearCanvas(canvasElement);
        SheetMusicLibrary.drawNoteOnStave(note, string, canvasElement);
    },

    drawNoteOnStave: function (note, string, canvasElement) {
        VF = Vex.Flow;

        var renderer = new VF.Renderer(canvasElement, VF.Renderer.Backends.SVG);

        renderer.resize(400, 300);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var stave = new VF.Stave(10, 40, 400);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        var notes = [
        new VF.StaveNote({ keys: [note + "/" + string], duration: "w" }),
        ];

        var voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
        voice.addTickables(notes);

        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
        voice.draw(context, stave);
        }

};