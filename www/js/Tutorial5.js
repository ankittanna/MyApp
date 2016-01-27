Tutorial5.prototype = Object.create(THREE.Object3D.prototype);
Tutorial5.prototype.constructor = Tutorial5;

function Tutorial5(scene) {


    THREE.Object3D.call(this);
    var room = this;
    scene.room = this;


    var tutFlag = true;

    THREE.ImageUtils.loadTexture('images/Tut5.png', undefined, function (texture) {
        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut5BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 5";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut5BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 5";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut5BoxLeft').innerHTML = "<p>Look up or down to go back to IIR</p> <p class='redText'>Focus on Image to go to next step</p>";
        document.getElementById('tut5BoxRight').innerHTML = "<p>Look up or down to go back to IIR</p> <p class='redText'>Focus on Image to go to next step</p>";
        document.getElementById('tut5BoxLeft').style.display = 'block';
        document.getElementById('tut5BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut5audio');
        voiceOver.play();

        room.Tut5 = new DetailImage(scene, texture, {
            scale: 12, //50,
            degree: 200, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {


                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut5.remove();
                        document.getElementById('tut5BoxLeft').style.display = 'none';
                        document.getElementById('tut5BoxRight').style.display = 'none';
                        new Tutorial6(scene);
                    }, 4000)
                    tutFlag = false;
                }


            },
            onBlur: function () {

            }
        });
        room.Tut5.mesh.rotation.z = 0;
        room.Tut5.mesh.rotation.y = -0.1;
        room.Tut5.mesh.rotation.x = 0;
    });


    this.remove = function () {

        // remove self
        scene.removeRoom(this);
    }
}