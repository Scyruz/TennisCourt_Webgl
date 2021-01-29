var scene, camera, renderer;
var meshBall, meshCourt, meshNet, meshRaquet;

var keyboard = {};
var player = {height:1.8, speed:0.2};

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);

    meshBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.315,20,60),
        new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
    );
    scene.add(meshBall);

    meshCourt = new THREE.Mesh(
        new THREE.PlaneGeometry(10.97,23.78,10,10),
        new THREE.MeshBasicMaterial({color:0x0000ff, wireframe: false})
    );
    meshCourt.rotation.x -= Math.PI / 2;
    scene.add(meshCourt);

    meshNet = new THREE.Mesh(
        new THREE.PlaneGeometry(10.97,0.91,10,10),
        new THREE.MeshBasicMaterial({color:0xffffff, wireframe: false})
    );

    meshNet.rotation.x -= Math.PI;
    scene.add(meshNet);

    camera.position.set(0, player.height,-5);
    camera.lookAt(new THREE.Vector3(0,player.height,0));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    document.body.appendChild(renderer.domElement);

    animate();
}

function animate(){
    requestAnimationFrame(animate);

    meshBall.position.set(0, 1.5, 1);
    meshCourt.position.set(0,0,0);
    meshNet.position.set(0,0.5,0);

    meshBall.rotation.x += 0.01;
    meshBall.rotation.y += 0.02;

    if(keyboard[37]){ //flecha izq
        camera.position.x += player.speed;
    }
    //if(keyboard[38]){ //flecha arr
    //    camera.position.y += player.speed;
    //}
    if(keyboard[39]){ //flecha der
        camera.position.x -= player.speed;        
    }
    //if(keyboard[40]){ //flecha aba
    //    camera.position.y -= player.speed;
    //}

    renderer.render(scene, camera);
}

function keyDown(event){
    keyboard[event.keyCode] = true;
}

function keyUp(event){
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;