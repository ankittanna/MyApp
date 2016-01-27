Tutorial3.prototype = Object.create(THREE.Object3D.prototype);
Tutorial3.prototype.constructor = Tutorial3;

function Tutorial3(scene) {


    THREE.Object3D.call(this);
    var room = this;
    scene.room = this;


    var tutFlag = true;
    THREE.ImageUtils.loadTexture('images/Tut3.png', undefined, function (texture) {
        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut3BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 3";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut3BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 3";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut3BoxLeft').innerHTML = "<p>Red Arrow</p> <p class='redText'>Focus on it to move to next room.</p>";
        document.getElementById('tut3BoxRight').innerHTML = "<p>Red Arrow</p> <p class='redText'>Focus on it to move to next room.</p>";
        document.getElementById('tut3BoxLeft').style.display = 'block';
        document.getElementById('tut3BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut3audio');
        voiceOver.play();

        room.Tut3 = new DetailImage(scene, texture, {
            scale: 12, //50,
            degree: 200, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {

                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut3.remove();
                        document.getElementById('tut3BoxLeft').style.display = 'none';
                        document.getElementById('tut3BoxRight').style.display = 'none';
                        new Tutorial4(scene);
                    }, 5000)
                    tutFlag = false;
                }
            },
            onBlur: function () {

            }
        });
        room.Tut3.mesh.rotation.z = 0;
        room.Tut3.mesh.rotation.y = -0.1;
        room.Tut3.mesh.rotation.x = 0;
    });

    this.remove = function () {

        scene.removeRoom(this);
    }
}