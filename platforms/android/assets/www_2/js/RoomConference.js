RoomConference.prototype = Object.create(THREE.Object3D.prototype);
RoomConference.prototype.constructor = RoomConference;

/*
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}*/

function RoomConference(scene) {


    THREE.Object3D.call(this);
    var room = this;
    /* var playBtn = room.playbutton;
     var playBtn1 = room.playbutton;
     var playBtn2 = room.playbutton;*/
    //  var playBtnFlag = false;
    scene.room = this;

    this.photoSphere = new PhotoSphere(scene, 'images/IIR-Room.jpg');
    this.textLights = new TextLights(scene, {});
    
    var descriptionContainerLeft = document.createElement('div');
    descriptionContainerLeft.id = 'videoDescBoxLeft';
    descriptionContainerLeft.className = "description-container";
    descriptionContainerLeft.innerHTML = "Focus to View Video";
    document.body.appendChild(descriptionContainerLeft);

    var descriptionContainerRight = document.createElement('div');
    descriptionContainerRight.id = 'videoDescBoxRight';
    descriptionContainerRight.className = "description-container message-container";
    descriptionContainerRight.innerHTML = "Focus to View Video";
    document.body.appendChild(descriptionContainerRight);


    var conferenceRoomNotificationLeft = document.createElement('div');
    conferenceRoomNotificationLeft.id = 'conferenceRoomNotificationLeft';
    conferenceRoomNotificationLeft.className = "notification-container";
    conferenceRoomNotificationLeft.innerHTML = "";
    document.body.appendChild(conferenceRoomNotificationLeft);

    var conferenceRoomNotificationRight = document.createElement('div');
    conferenceRoomNotificationRight.id = 'conferenceRoomNotificationRight';
    conferenceRoomNotificationRight.className = "notification-container message-container2";
    conferenceRoomNotificationRight.innerHTML = "";
    document.body.appendChild(conferenceRoomNotificationRight);

    /*------------------------------------TUTORIAL INDICATORS---------------------------------------*/
    var roomArrow1Left = document.createElement('img');
    var roomArrow2Left = document.createElement('img');
    var roomArrow3Left = document.createElement('img');
    var roomArrow4Left = document.createElement('img');

    var roomArrow1Right = document.createElement('img');
    var roomArrow2Right = document.createElement('img');
    var roomArrow3Right = document.createElement('img');
    var roomArrow4Right = document.createElement('img');

    roomArrow1Left.src = "images/left.png";
    roomArrow1Right.src = "images/left.png";
    roomArrow2Left.src = "images/right.png";
    roomArrow2Right.src = "images/right.png";
    roomArrow3Left.src = "images/top.png";
    roomArrow3Right.src = "images/top.png";
    roomArrow4Left.src = "images/bottom.png";
    roomArrow4Right.src = "images/bottom.png";

    roomArrow1Left.id = "roomArrow1Left";
    roomArrow1Right.id = "roomArrow1Right";
    roomArrow2Left.id = "roomArrow2Left";
    roomArrow2Right.id = "roomArrow2Right";
    roomArrow3Left.id = "roomArrow3Left";
    roomArrow3Right.id = "roomArrow3Right";
    roomArrow4Left.id = "roomArrow4Left";
    roomArrow4Right.id = "roomArrow4Right";

    roomArrow1Left.style.display = "block";
    roomArrow1Right.style.display = "block";
    roomArrow2Left.style.display = "block";
    roomArrow2Right.style.display = "block";
    roomArrow3Left.style.display = "block";
    roomArrow3Right.style.display = "block";
    roomArrow4Left.style.display = "block";
    roomArrow4Right.style.display = "block";

    roomArrow1Left.className = "arrow1Left animatedArrow fadeInRight";
    roomArrow1Right.className = "arrow1Right animatedArrow fadeInRight";
    roomArrow2Left.className = "arrow2Left animatedArrow fadeInLeft";
    roomArrow2Right.className = "arrow2Right animatedArrow fadeInLeft";
    roomArrow3Left.className = "arrow3Left animatedArrow fadeInTop";
    roomArrow3Right.className = "arrow3Right animatedArrow fadeInTop";
    roomArrow4Left.className = "arrow4Left animatedArrow fadeInBottom";
    roomArrow4Right.className = "arrow4Right animatedArrow fadeInBottom";

    document.body.appendChild(roomArrow1Left);
    document.body.appendChild(roomArrow1Right);
    document.body.appendChild(roomArrow2Left);
    document.body.appendChild(roomArrow2Right);
    document.body.appendChild(roomArrow3Left);
    document.body.appendChild(roomArrow3Right);
    document.body.appendChild(roomArrow4Left);
    document.body.appendChild(roomArrow4Right);


    var rotateHeadNotificationLeft = document.createElement('div');
    rotateHeadNotificationLeft.id = 'rotateHeadNotificationLe   ft';
    rotateHeadNotificationLeft.className = "rotateHead-container hideElement hideElementAnimation";
    rotateHeadNotificationLeft.innerHTML = "360° View. Focus on Play Button to view the Demo";
    document.body.appendChild(rotateHeadNotificationLeft);

    var rotateHeadNotificationRight = document.createElement('div');
    rotateHeadNotificationRight.id = 'rotateHeadNotificationRight';
    rotateHeadNotificationRight.className = "rotateHead-container message-container2 hideElement hideElementAnimation";
    rotateHeadNotificationRight.innerHTML = "360° View. Focus on Play Button to view the Demo";
    document.body.appendChild(rotateHeadNotificationRight);

    rotateHeadNotificationLeft.style.display = "block";
    rotateHeadNotificationRight.style.display = "block";



    // Focus on Screen
    /* var focusOnScreenLeft = document.createElement('div');
 focusOnScreenLeft.id = 'focusOnScreenLeft';
 focusOnScreenLeft.className = "focusScreen-container animatedUp fadeInUp";
 focusOnScreenLeft.innerHTML = "Focus on Play Button to view the Demo";
 document.body.appendChild(focusOnScreenLeft);

 var focusOnScreenRight = document.createElement('div');
 focusOnScreenRight.id = 'focusOnScreenRight';
 focusOnScreenRight.className = "focusScreen-container message-container2 animatedUp fadeInUp";
 focusOnScreenRight.innerHTML = "Focus on Play Button to view the Demo";
 document.body.appendChild(focusOnScreenRight);

 focusOnScreenLeft.style.display = "block";
 focusOnScreenRight.style.display = "block";*/




    /*------------------------------------WEBRTC----------------------------------------------------*/
    showliveCast();

    setInterval(function () {
        //
        //Broadcast WEBRTC
        if (connectionFlag && room.liveStream == undefined) {
            room.liveStreamRed.remove();
            THREE.ImageUtils.loadTexture('images/live-Green.png', undefined, function (texture) {

                /*document.getElementById('videoDescBoxLeft').innerHTML = "Watch Live Broadcast of IIR";
                document.getElementById('videoDescBoxRight').innerHTML = "Watch Live Broadcast of IIR";
                document.getElementById('videoDescBoxLeft').style.display = 'block';
                document.getElementById('videoDescBoxRight').style.display = 'block';*/

                conferenceRoomNotificationLeft.innerHTML = "IIR Live Stream Available.";
                conferenceRoomNotificationRight.innerHTML = "IIR Live Stream Available.";
                document.getElementById('conferenceRoomNotificationLeft').style.display = 'block';
                document.getElementById('conferenceRoomNotificationRight').style.display = 'block';

                setInterval(function () {
                    conferenceRoomNotificationLeft.innerHTML = "";
                    conferenceRoomNotificationRight.innerHTML = "";

                    document.getElementById('conferenceRoomNotificationLeft').style.display = 'none';
                    document.getElementById('conferenceRoomNotificationRight').style.display = 'none';

                    /*document.getElementById('videoDescBoxLeft').style.display = 'none';
document.getElementById('videoDescBoxRight').style.display = 'none';*/

                }, 4000);

                room.liveStream = new DetailImage(scene, texture, {

                    scale: 100, //50,
                    degree: 54, //10,
                    verticalDegree: 12, //0,
                    radius: 12 * SCALE,
                    onFocus: function () {

                        document.getElementById('videoDescBoxLeft').innerHTML = "Watch Live Broadcast of IIR";
                        document.getElementById('videoDescBoxRight').innerHTML = "Watch Live Broadcast of IIR";
                        document.getElementById('videoDescBoxLeft').style.display = 'block';
                        document.getElementById('videoDescBoxRight').style.display = 'block';

                        setInterval(function () {
                            window.location.href = 'live.html#IIR';
                            //Phonegap
                            //window.open('http://23.99.125.198/IIR/live.html#IIR', '_system');
                        }, 1000)



                    },
                    onBlur: function () {
                        document.getElementById('videoDescBoxLeft').style.display = 'none';
                        document.getElementById('videoDescBoxRight').style.display = 'none';
                    }
                });

            });
        } else if (!connectionFlag && room.liveStream) {
            room.liveStream.remove();
            showliveCast();
        }

    }, 1000)

    function showliveCast() {
            THREE.ImageUtils.loadTexture('images/live-Red.png', undefined, function (texture) {
                room.liveStreamRed = new DetailImage(scene, texture, {

                    scale: 100, //50,
                    degree: 54, //10,
                    verticalDegree: 12, //0,
                    radius: 12 * SCALE,
                    onFocus: function () {

                        document.getElementById('videoDescBoxLeft').innerHTML = "Watch Live Broadcast of IIR when icon turns green";
                        document.getElementById('videoDescBoxRight').innerHTML = "Watch Live Broadcast of IIR when icon turns green";
                        document.getElementById('videoDescBoxLeft').style.display = 'block';
                        document.getElementById('videoDescBoxRight').style.display = 'block';

                    },
                    onBlur: function () {
                        document.getElementById('videoDescBoxLeft').style.display = 'none';
                        document.getElementById('videoDescBoxRight').style.display = 'none';
                    }
                });

            });
        }
        /*------------------------------------WEBRTC----------------------------------------------------*/
        /*------------------------------------Tutorial----------------------------------------------------*/

    THREE.ImageUtils.loadTexture('images/tutorial_button.png', undefined, function (texture) {
        room.tut = new DetailImage(scene, texture, {

            scale: 40, //50,
            degree: 180, //10,
            verticalDegree: 15, //0,
            radius: 12 * SCALE,
            onFocus: function () {

                room.remove();
                // Start a new room
                new Tutorial1(scene);

            },
            onBlur: function () {

            }
        });
        room.tut.mesh.rotation.x = 0;
        room.tut.mesh.rotation.y = 0;
        room.tut.mesh.rotation.z = 0;
    });

    /*------------------------------------Tutorial----------------------------------------------------*/

    /*------------------------------------TV Demo----------------------------------------------------*/

    function redirect(url) {
        window.location.href = 'video.html?url=' + url;
    };

    function showPlayButton(scaleVal, degreeVal, url) {
        THREE.ImageUtils.loadTexture('images/video_icon.png', undefined, function (texture) {
            room.playbutton = new DetailImage(scene, texture, {

                scale: scaleVal,
                degree: degreeVal,
                verticalDegree: 0,
                radius: 10 * SCALE, //curve
                onFocus: function () {
                    /*focusOnScreenLeft.className = "focusScreen-container enterRoom";
focusOnScreenRight.className = "focusScreen-container message-container2 enterRoom";*/

                    setTimeout(function () {
                        redirect(url);
                    }, 1000);

                }

            });
            room.playbutton.mesh.rotation.x = 0.02;
            room.playbutton.mesh.rotation.y = -0.35;
            room.playbutton.mesh.rotation.z = -0.028;
            // playBtnFlag = true;
        });
    }

    function showPlayButton1(scaleVal, degreeVal, url) {
        THREE.ImageUtils.loadTexture('images/video_icon.png', undefined, function (texture) {
            room.playbutton1 = new DetailImage(scene, texture, {

                scale: scaleVal,
                degree: degreeVal,
                verticalDegree: 0,
                radius: 10 * SCALE, //curve
                onFocus: function () {
                    /*focusOnScreenLeft.className = "focusScreen-container enterRoom";
focusOnScreenRight.className = "focusScreen-container message-container2 enterRoom";*/

                    setTimeout(function () {
                        redirect(url);
                    }, 1000);

                }

            });
            room.playbutton1.mesh.rotation.x = 0.02;
            room.playbutton1.mesh.rotation.y = -0.35;
            room.playbutton1.mesh.rotation.z = -0.028;
            // playBtnFlag = true;
        });
    }

    function showPlayButton2(scaleVal, degreeVal, url) {
        THREE.ImageUtils.loadTexture('images/video_icon.png', undefined, function (texture) {
            room.playbutton2 = new DetailImage(scene, texture, {

                scale: scaleVal,
                degree: degreeVal,
                verticalDegree: 0,
                radius: 10 * SCALE, //curve
                onFocus: function () {
                    /*focusOnScreenLeft.className = "focusScreen-container enterRoom";
focusOnScreenRight.className = "focusScreen-container message-container2 enterRoom";*/

                    setTimeout(function () {
                        redirect(url);
                    }, 1000);

                }

            });
            room.playbutton2.mesh.rotation.x = 0.02;
            room.playbutton2.mesh.rotation.y = -0.35;
            room.playbutton2.mesh.rotation.z = -0.028;
            // playBtnFlag = true;
        });
    }

    THREE.ImageUtils.loadTexture(TVDetail[0].imageURL, undefined, function (texture) {

        redirectURL = TVDetail[0].videoURL;
        showPlayButton(30, 37, redirectURL);
        room.tv1 = new DetailImage(scene, texture, {

            scale: 42, //50,
            degree: 38, //10,
            verticalDegree: 0, //0,
            radius: 13 * SCALE,

            onFocus: function () {
                /* redirectURL = TVDetail[0].videoURL;
                 if (playBtn != undefined && playBtnFlag == false)
                     playBtn.remove();
                 if (playBtnFlag == false)
                     showPlayButton(30, 37,redirectURL);*/



                //window.location.href = 'video.html';
                redirectURL = TVDetail[0].videoURL;
                document.getElementById('videoDescBoxLeft').innerHTML = TVDetail[0].videoDesc;
                document.getElementById('videoDescBoxRight').innerHTML = TVDetail[0].videoDesc;
                document.getElementById('videoDescBoxLeft').style.display = 'block';
                document.getElementById('videoDescBoxRight').style.display = 'block';



            },
            onBlur: function () {

                document.getElementById('videoDescBoxLeft').style.display = 'none';
                document.getElementById('videoDescBoxRight').style.display = 'none';
                //  playBtnFlag = false;

            }
        });
        room.tv1.mesh.rotation.z = 0;
        room.tv1.mesh.rotation.y = -0.7;
        room.tv1.mesh.rotation.x = 0;
    });

    THREE.ImageUtils.loadTexture(TVDetail[1].imageURL, undefined, function (texture) {
        redirectURL = TVDetail[1].videoURL;
        showPlayButton1(20, 3, redirectURL);
        room.tv2 = new DetailImage(scene, texture, {
            scale: 20, //50,
            degree: 3, //10,
            verticalDegree: 0, //0,
            radius: 13 * SCALE,

            onFocus: function () {
                redirectURL = TVDetail[1].videoURL;
                /*if (playBtn != undefined && playBtnFlag == false)
    playBtn.remove();
if (playBtnFlag == false)
    showPlayButton(20, 3);*/


                //window.location.href = 'video.html';
                document.getElementById('videoDescBoxLeft').innerHTML = TVDetail[1].videoDesc;
                document.getElementById('videoDescBoxRight').innerHTML = TVDetail[1].videoDesc;
                document.getElementById('videoDescBoxLeft').style.display = 'block';
                document.getElementById('videoDescBoxRight').style.display = 'block';



            },
            onBlur: function () {
                // document.getElementById('videoDescBoxLeft').innerHTML = "Click to View Video";
                // document.getElementById('videoDescBoxRight').innerHTML = "Click to View Video";
                document.getElementById('videoDescBoxLeft').style.display = 'none';
                document.getElementById('videoDescBoxRight').style.display = 'none';
                //playBtnFlag = false;

            }
        });
        room.tv2.mesh.rotation.z = 0;
        room.tv2.mesh.rotation.y = -0.1;
        room.tv2.mesh.rotation.x = 0;
    });


    THREE.ImageUtils.loadTexture(TVDetail[2].imageURL, undefined, function (texture) {
        redirectURL = TVDetail[2].videoURL;
        showPlayButton2(30, -35, redirectURL);
        room.tv3 = new DetailImage(scene, texture, {
            scale: 40, //50,
            degree: -35.55, //10,
            verticalDegree: 0.5, //0,
            radius: 13 * SCALE,
            onFocus: function () {
                redirectURL = TVDetail[2].videoURL;
                /*if (playBtn != undefined && playBtnFlag == false)
    playBtn.remove();
if (playBtnFlag == false)
    showPlayButton(30, -35)*/

                document.getElementById('videoDescBoxLeft').innerHTML = TVDetail[2].videoDesc;
                document.getElementById('videoDescBoxRight').innerHTML = TVDetail[2].videoDesc;
                document.getElementById('videoDescBoxLeft').style.display = 'block';
                document.getElementById('videoDescBoxRight').style.display = 'block';
            },
            onBlur: function () {
                // document.getElementById('videoDescBoxLeft').innerHTML = "Click to View Video";
                // document.getElementById('videoDescBoxRight').innerHTML = "Click to View Video";
                document.getElementById('videoDescBoxLeft').style.display = 'none';
                document.getElementById('videoDescBoxRight').style.display = 'none';
                // playBtnFlag = false;
            }
        });
        room.tv3.mesh.rotation.z = 0;
        room.tv3.mesh.rotation.y = 0.5;
        room.tv3.mesh.rotation.x = 0;
    });

    /*------------------------------------TV Demo----------------------------------------------------*/
    /*---------------------------------Navigation Arrow----------------------------------------------*/
    THREE.ImageUtils.loadTexture('images/exit.png', undefined, function (texture) {
        room.nav = new DetailImage(scene, texture, {

            scale: 20,
            degree: 226, //10,
            verticalDegree: 0, //0,
            radius: 12 * SCALE,
            onFocus: function () {

                room.remove();
                // Start a new room
                new RoomEntrence(scene);

            }
        });
        room.nav.mesh.rotation.x = 0;
        room.nav.mesh.rotation.y = 0;
        room.nav.mesh.rotation.z = 0;
    });
    this.navigationArrowToBack = new NavigationArrow(scene, {
        degree: 227,
        verticalOffset: -0.9,
        radius: 12 * SCALE,
        onFocus: function () {

            room.remove();
            // Start a new room
            new RoomEntrence(scene);
            //scene.rotation.y += 250;
        }

    });
    /*---------------------------------Navigation Arrow----------------------------------------------*/
    this.remove = function () {
        this.photoSphere.remove();
        this.textLights.remove();
        this.navigationArrowToBack.remove();

        if (room.tv1 != undefined) {
            room.tv1.remove();
        }
        if (room.tv2 != undefined) {
            room.tv2.remove();
        }
        if (room.tv3 != undefined) {
            room.tv3.remove();
        }
        if (room.playbutton != undefined) {
            room.playbutton.remove()
        }
        if (room.playbutton1 != undefined) {
            room.playbutton1.remove()
        }
        if (room.playbutton2 != undefined) {
            room.playbutton2.remove()
        }
        if (room.mvm != undefined) {
            room.mvm.remove();
        }
        if (room.uvkm != undefined) {
            room.uvkm.remove();
        }
        if (room.logo != undefined) {
            room.logo.remove();
        }


        if (room.button != undefined) {
            room.button.remove();
        }
        if (room.lefttv != undefined) {
            room.lefttv.remove();
        }
        if (room.righttv != undefined) {
            room.righttv.remove();
        }

        if (room.tut != undefined) {
            room.tut.remove();
        }
        if (room.nav != undefined) {
            room.nav.remove();
        }
        if (room.liveStream != undefined) {
            room.liveStream.remove();
        }
        if (room.liveStreamRed != undefined) {
            room.liveStreamRed.remove();
        }
        //focusOnScreenLeft.style.display = "none";
        //focusOnScreenRight.style.display = "none";
        // remove self
        scene.removeRoom(this);
    }
}