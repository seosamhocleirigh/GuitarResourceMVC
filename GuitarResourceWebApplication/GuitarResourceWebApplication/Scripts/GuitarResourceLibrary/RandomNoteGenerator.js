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


        defaults: {
            buttonNextNote: $("#buttonrandomnote"),
            randomNoteOutputElement: $("#outputboxnotes")
        },
        
        init: function (settings) {
            console.log("Random note generator initialising");
            //randomNoteGeneratorSettings = RandomNoteGenerator.settings
            $.extend(RandomNoteGenerator.defaults, settings);
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
            $(randomNoteGeneratorSettings.randomNoteOutputElement.selector).text(randomNote);
        }
    };