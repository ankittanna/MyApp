Tutorial2.prototype = Object.create(THREE.Object3D.prototype);
Tutorial2.prototype.constructor = Tutorial2;

function Tutorial2(scene) {


    THREE.Object3D.call(this);
    var room = this;
    scene.room = this;

    var tutFlag = true;

    THREE.ImageUtils.loadTexture('images/Tut2.png', undefined, function (texture) {
        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut2BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 2";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut2BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 2";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut2BoxLeft').innerHTML = "<p>Rotate head for 360° View</p> <p class='redText'>Focus on the Images to go to next step.</p>";
        document.getElementById('tut2BoxRight').innerHTML = "<p>Rotate head for 360° View</p> <p class='redText'>Focus on the Images to go to next step.</p>";
        document.getElementById('tut2BoxLeft').style.display = 'block';
        document.getElementById('tut2BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut2audio');
        voiceOver.play();

        room.Tut2 = new DetailImage(scene, texture, {
            scale: 11, //50,
            degree: 170, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {

                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut2.remove();
                        document.getElementById('tut2BoxLeft').style.display = 'none';
                        document.getElementById('tut2BoxRight').style.display = 'none';
                        new Tutorial3(scene);

                    }, 3000)
                    tutFlag = false;
                }
            },
            onBlur: function () {

            }
        });
        room.Tut2.mesh.rotation.z = 0;
        room.Tut2.mesh.rotation.y = -0.1;
        room.Tut2.mesh.rotation.x = 0;
    });


    this.remove = function () {

        scene.removeRoom(this);
    }
}