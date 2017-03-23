var randomNoteGeneratorSettings,
    RandomNoteGenerator = {

        /*

        <script src="/Scripts/GuitarResourceLibrary/RandomNoteGenerator.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            RandomNoteGenerator.init();
        });
    </script>

    <p>
            <div type="button" id="ButtonNextNote" class="btn btn-default">
                Click Me
            </div>
            <span>Random Note: </span><label id="RandomNote"></label>
        </p>

        */


        settings: {
            buttonNextNote: $("#ButtonNextNote"),
            randomNoteElement: $("#RandomNote")
        },
        
        init: function () {
            console.log("Random note generator initialising");
            randomNoteGeneratorSettings = RandomNoteGenerator.settings
            RandomNoteGenerator.bindUIActions();
        },

        bindUIActions: function () {
            console.log("binding UI");
            $(randomNoteGeneratorSettings.buttonNextNote.selector).click(function () {
                RandomNoteGenerator.outputRandomNoteToUI();
            })
        },

        outputRandomNoteToUI: function () {
            console.log("output to UI fired");
            var randomNote = RandomNoteGenerator.generateRandomNote();
            $(randomNoteGeneratorSettings.randomNoteElement.selector).text(randomNote);
        },

        generateRandomNote: function () {
            console.log("generating random note");
            return "A";
        }
    };