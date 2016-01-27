Tutorial6.prototype = Object.create(THREE.Object3D.prototype);
Tutorial6.prototype.constructor = Tutorial6;

function Tutorial6(scene) {


    THREE.Object3D.call(this);
    var room = this;
    scene.room = this;

    var tutFlag = true;

    THREE.ImageUtils.loadTexture('images/Tut6.png', undefined, function (texture) {

        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut6BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 6";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut6BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 6";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut6BoxLeft').innerHTML = "<p>Live Stream</p> <p class='redText'>Watch for this Green logo for a live <br/> broadcast from IIR.</p>";
        document.getElementById('tut6BoxRight').innerHTML = "<p>Live Stream</p> <p class='redText'>Watch for this Green logo for a live <br/> broadcast from IIR.</p>";
        document.getElementById('tut6BoxLeft').style.display = 'block';
        document.getElementById('tut6BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut6audio');
        voiceOver.play();

        room.Tut6 = new DetailImage(scene, texture, {
            scale: 12, //50,
            degree: 140, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {


                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut6.remove();
                        document.getElementById('tut6BoxLeft').style.display = 'none';
                        document.getElementById('tut6BoxRight').style.display = 'none';
                        window.localStorage.setItem("isTutComplete", true);
                        // Start a new room
                        new RoomConference(scene);
                    }, 4000)
                    tutFlag = false;
                }


            },
            onBlur: function () {


            }
        });
        room.Tut6.mesh.rotation.z = 0;
        room.Tut6.mesh.rotation.y = -0.1;
        room.Tut6.mesh.rotation.x = 0;
    });

    this.remove = function () {

        scene.removeRoom(this);
    }
}