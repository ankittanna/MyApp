Tutorial4.prototype = Object.create(THREE.Object3D.prototype);
Tutorial4.prototype.constructor = Tutorial4;

function Tutorial4(scene) {


    THREE.Object3D.call(this);
    var room = this;
    scene.room = this;

    var tutFlag = true;

    THREE.ImageUtils.loadTexture('images/Tut4.png', undefined, function (texture) {
        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut4BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 4";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut4BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 4";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut4BoxLeft').innerHTML = "<p>Playing the Demos</p><p class='redText'>Focus on the Play Button <br/> to play the Demos</p>";
        document.getElementById('tut4BoxRight').innerHTML = "<p>Playing the Demos</p> <p class='redText'>Focus on the Play Button <br/> to play the Demos</p>";
        document.getElementById('tut4BoxLeft').style.display = 'block';
        document.getElementById('tut4BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut4audio');
        voiceOver.play();

        room.Tut4 = new DetailImage(scene, texture, {
            scale: 12, //50,
            degree: 130, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {


                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut4.remove();
                        document.getElementById('tut4BoxLeft').style.display = 'none';
                        document.getElementById('tut4BoxRight').style.display = 'none';
                        new Tutorial5(scene);
                    }, 4000)
                    tutFlag = false;
                }


            },
            onBlur: function () {


            }
        });
        room.Tut4.mesh.rotation.z = 0;
        room.Tut4.mesh.rotation.y = -0.1;
        room.Tut4.mesh.rotation.x = 0;
    });


    this.remove = function () {

        scene.removeRoom(this);
    }
}