Tutorial1.prototype = Object.create(THREE.Object3D.prototype);
Tutorial1.prototype.constructor = Tutorial1;

function Tutorial1(scene) {
    window.localStorage.setItem("isTutComplete", false);

    THREE.Object3D.call(this);
    var room = this;

    scene.room = this;

    var tutFlag = true;

    THREE.ImageUtils.loadTexture('images/Tut1.png', undefined, function (texture) {

        var descriptionContainerLeft = document.createElement('div');
        descriptionContainerLeft.id = 'tut1BoxLeft';
        descriptionContainerLeft.className = "tutorial1-container tutorialBox";
        descriptionContainerLeft.innerHTML = "Tutorial 1";
        document.body.appendChild(descriptionContainerLeft);

        var descriptionContainerRight = document.createElement('div');
        descriptionContainerRight.id = 'tut1BoxRight';
        descriptionContainerRight.className = "tutorial1-container tut-container tutorialBox";
        descriptionContainerRight.innerHTML = "Tutorial 1";
        document.body.appendChild(descriptionContainerRight);

        document.getElementById('tut1BoxLeft').innerHTML = "<p>Welcome to <br/> Accenture IIR Virtual Experience.</p> <p class='redText'>Focus on the Images to go to next step.</p>";
        document.getElementById('tut1BoxRight').innerHTML = "<p>Welcome to <br/> Accenture IIR Virtual Experience.</p> <p class='redText'>Focus on the Images to go to next step.</p>";
        document.getElementById('tut1BoxLeft').style.display = 'block';
        document.getElementById('tut1BoxRight').style.display = 'block';

        var voiceOver = document.getElementById('tut1audio');
        voiceOver.play();

        room.Tut1 = new DetailImage(scene, texture, {
            scale: 11, //50,
            degree: 230, //10,
            verticalDegree: 0, //0,
            radius: 20 * SCALE,

            onFocus: function () {

                if (tutFlag) {
                    setTimeout(function () {
                        room.Tut1.remove();
                        document.getElementById('tut1BoxLeft').style.display = 'none';
                        document.getElementById('tut1BoxRight').style.display = 'none';
                        new Tutorial2(scene);
                    }, 3000)
                    tutFlag = false;
                }


            },
            onBlur: function () {

            }
        });
        room.Tut1.mesh.rotation.z = 0;
        room.Tut1.mesh.rotation.y = -0.1;
        room.Tut1.mesh.rotation.x = 0;
    });


    this.remove = function () {

        scene.removeRoom(this);
    }
}