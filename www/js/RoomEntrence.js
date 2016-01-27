RoomEntrence.prototype = Object.create(THREE.Object3D.prototype);
RoomEntrence.prototype.constructor = RoomEntrence;

function RoomEntrence(scene) {
    THREE.Object3D.call(this);
    var roomEntrence = this;
    scene.room = this;

    var enterRoomNotificationLeft = document.createElement('div');
    enterRoomNotificationLeft.id = 'enterRoomNotificationLeft';
    enterRoomNotificationLeft.className = "notification-container";
    enterRoomNotificationLeft.innerHTML = "Exited IIR<p>Focus on the Red arrow to enter IIR</p>";
    document.body.appendChild(enterRoomNotificationLeft);

    var enterRoomNotificationRight = document.createElement('div');
    enterRoomNotificationRight.id = 'enterRoomNotificationRight';
    enterRoomNotificationRight.className = "notification-container message-container2";
    enterRoomNotificationRight.innerHTML = "Exited IIR<p>Focus on the Red arrow to enter IIR</p>";
    document.body.appendChild(enterRoomNotificationRight);

    enterRoomNotificationLeft.style.display = 'block';
    enterRoomNotificationRight.style.display = 'block';


    this.photoSphere = new PhotoSphere(scene, 'images/IIREntrance.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToArrival = new NavigationArrow(scene, {
        degree: 169,
        verticalOffset: 0,
        onFocus: function () {
            enterRoomNotificationLeft.className = "notification-container enterRoom";
            enterRoomNotificationRight.className = "notification-container message-container2 enterRoom";

            setTimeout(function () {
                // remove the room
                enterRoomNotificationLeft.style.display = 'none';
                enterRoomNotificationRight.style.display = 'none';
                roomEntrence.remove();
                // Start a new room
                new RoomConference(scene);
                scene.rotation.y += 250;

            }, 1000);

        },
        onBlur: function () {
            enterRoomNotificationLeft.className = "notification-container";
            enterRoomNotificationRight.className = "notification-container message-container2";
        }
    });



    this.remove = function () {
        this.photoSphere.remove();
        this.navigationArrowToArrival.remove();

        this.textLights.remove();

        // part
        if (roomEntrence.part1 != undefined) {
            roomEntrence.part1.remove();
        }

        if (roomEntrence.pong != undefined) {
            roomEntrence.pong.remove();
        }

        if (scene.room.tv1 != undefined) {
            scene.room.tv1.remove();
        }
        if (scene.room.tv2 != undefined) {
            scene.room.tv2.remove();
        }
        if (scene.room.tv3 != undefined) {
            scene.room.tv3.remove();
        }
        if (scene.room.playBtn != undefined) {
            scene.room.playBtn.remove()
        }

        if (scene.room.mvm != undefined) {
            scene.room.mvm.remove();
        }
        if (scene.room.uvkm != undefined) {
            scene.room.uvkm.remove();
        }
        if (scene.room.logo != undefined) {
            scene.room.logo.remove();
        }


        if (scene.room.button != undefined) {
            scene.room.button.remove();
        }
        if (scene.room.lefttv != undefined) {
            scene.room.lefttv.remove();
        }
        if (scene.room.righttv != undefined) {
            scene.room.righttv.remove();
        }

        if (scene.room.tut != undefined) {
            scene.room.tut.remove();
        }

        if (scene.room.liveStream != undefined) {
            scene.room.liveStream.remove();
        }
        if (scene.room.liveStreamRed != undefined) {
            scene.room.liveStreamRed.remove();
        }

        // remove self
        scene.removeRoom(this);
        // remove self
        //scene.removeRoom(this);
    }

}