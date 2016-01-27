$(function() {
        // Initiate Insomnia PhoneGap Plugin
        try {
        cordova.exec(function(){}, function(){}, "Insomnia", "keepAwake", []);
        } catch (e){ }
        });
        // initialize the screen

        function connectionStarted(connectionStatus)
        {
        connectionFlag = connectionStatus;
        }
        // window.scrollTo(0,1);
        //alert(navigator.network.connection.type);

        function setup() {
        alert("here");
        cardboard = new Cardboard();

        mainController = new MainController();
        cardboard.scene.add(mainController);

        cursor = new Cursor();
        cardboard.camera.add(cursor);
        cursor.position.z = -3 * SCALE;
        cursor.lookAt(cardboard.camera.position);


        cardboard.effect.separation = 0;

        if (!has.mobile) {
        setTimeout(function () {
        cardboard.orbitControls.target.set(0, 0.3, 1);
        }, 0);
        }

        cardboard.update = function () {
        Cardboard.prototype.update.call(this);
        mainController.update();
        };

        document.getElementById('scene').appendChild(cardboard.renderer.domElement);

        // Start
        root.MainController = MainController;
        root.Cursor = Cursor;

        }


        //	$(this).remove();
        // setup();
        //  });