
var scene, camera, renderer;
var meshBall, meshCourt, meshNet, meshTube, meshTube1;

var raquet;

var ballTexture, ballBumpMap, ballColorMap;

var keyboard = {};
var player = {height:1.8, speed:0.2};

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(02211155);
    camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);    

    let urls = [
        'NiagaraFalls/posx.jpg','NiagaraFalls/negx.jpg',
        'NiagaraFalls/posy.jpg','NiagaraFalls/negy.jpg',
        'NiagaraFalls/posz.jpg','NiagaraFalls/negz.jpg',
    ];

    let skyLoader = new THREE.CubeTextureLoader();
    scene.background = skyLoader.load(urls);
    //Texturas
    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    //Cancha, bola y red
    meshBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.325, 20, 16),
        new THREE.MeshPhongMaterial(
            {color: 0xffffff,
            map: loader.load('https://i.imgur.com/nnHRXkD.jpg'),
            bumpMap: loader.load('https://i.imgur.com/Vttjbxt.jpg'),
            normalMap: loader.load('https://i.imgur.com/7EYJcU8.jpg')
            })
    );
    meshBall.position.set(0, 1.5, 0);
    meshBall.receiveShadow = true;
    meshBall.castShadow = true;
    scene.add(meshBall);

    meshCourt = new THREE.Mesh(
        new THREE.PlaneGeometry(17,30.78,10,10),
        new THREE.MeshPhongMaterial({
            color:0xffffff, 
            map: loader.load('https://i.imgur.com/nj7Zt7L.jpeg')})
    );
    meshCourt.rotation.x -= Math.PI / 2;
    meshCourt.position.set(0,0,0);
    meshCourt.receiveShadow = true;
    meshCourt.castShadow = true;
    scene.add(meshCourt);

    meshNet = new THREE.Mesh(
        new THREE.PlaneGeometry(10.38,0.16,10,10),
        new THREE.MeshPhongMaterial({
            color:0xffffff, 
            map: loader.load('https://i.imgur.com/B3M60qc.jpg')})
    );

    meshNet.rotation.x -= Math.PI;
    meshNet.position.set(0,1.12,0);
    meshNet.receiveShadow = true;
    meshNet.castShadow = true;
    scene.add(meshNet);

    meshTube = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.05, 0.05, 1.37, 32 ),
        new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: loader.load('https://i.imgur.com/ilzY46R.jpg')}) 
    );
    
    meshTube.position.set(-5.2,0.5,0);
    meshTube.receiveShadow = true;
    meshTube.castShadow = true;
    scene.add( meshTube );

    meshTube1 = new THREE.Mesh(
        new THREE.CylinderGeometry( 0.05, 0.05, 1.37, 32 ),
        new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: loader.load('https://i.imgur.com/ilzY46R.jpg')}) 
    );
    
    meshTube1.position.set(5.2,0.5,0);
    meshTube1.receiveShadow = true;
    meshTube1.castShadow = true;
    scene.add( meshTube1 );

    geometry = new THREE.CylinderGeometry( 0.01, 0.01, 1.2, 32 );
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var thread1 = new THREE.Mesh( geometry, material );
    thread1.position.set(5,0.5,0);
    scene.add( thread1 );

    var thread2 = new THREE.Mesh( geometry, material );
    thread2.position.set(4.8,0.5,0);
    scene.add( thread2 );

    var thread3 = new THREE.Mesh( geometry, material );
    thread3.position.set(4.6,0.5,0);
    scene.add( thread3 );

    var thread4 = new THREE.Mesh( geometry, material );
    thread4.position.set(4.4,0.5,0);
    scene.add( thread4 );

    var thread5 = new THREE.Mesh( geometry, material );
    thread5.position.set(4.2,0.5,0);
    scene.add( thread5 );

    var thread6 = new THREE.Mesh( geometry, material );
    thread6.position.set(4,0.5,0);
    scene.add( thread6 );

    var thread7 = new THREE.Mesh( geometry, material );
    thread7.position.set(3.8,0.5,0);
    scene.add( thread7 );

    var thread8 = new THREE.Mesh( geometry, material );
    thread8.position.set(3.6,0.5,0);
    scene.add( thread8 );

    var thread9 = new THREE.Mesh( geometry, material );
    thread9.position.set(3.4,0.5,0);
    scene.add( thread9 );

    var thread10 = new THREE.Mesh( geometry, material );
    thread10.position.set(3.2,0.5,0);
    scene.add( thread10 );

    var thread11 = new THREE.Mesh( geometry, material );
    thread11.position.set(3,0.5,0);
    scene.add( thread11 );

    var thread12 = new THREE.Mesh( geometry, material );
    thread12.position.set(2.8,0.5,0);
    scene.add( thread12 );

    var thread13 = new THREE.Mesh( geometry, material );
    thread13.position.set(2.6,0.5,0);
    scene.add( thread13 );

    var thread14 = new THREE.Mesh( geometry, material );
    thread14.position.set(2.4,0.5,0);
    scene.add( thread14 );

    var thread15 = new THREE.Mesh( geometry, material );
    thread15.position.set(2.2,0.5,0);
    scene.add( thread15 );

    var thread16 = new THREE.Mesh( geometry, material );
    thread16.position.set(2,0.5,0);
    scene.add( thread16 );

    var thread17 = new THREE.Mesh( geometry, material );
    thread17.position.set(1.8,0.5,0);
    scene.add( thread17 );

    var thread18 = new THREE.Mesh( geometry, material );
    thread18.position.set(1.6,0.5,0);
    scene.add( thread18 );

    var thread19 = new THREE.Mesh( geometry, material );
    thread19.position.set(1.4,0.5,0);
    scene.add( thread19 );

    var thread20 = new THREE.Mesh( geometry, material );
    thread20.position.set(1.2,0.5,0);
    scene.add( thread20 );

    var thread21 = new THREE.Mesh( geometry, material );
    thread21.position.set(1,0.5,0);
    scene.add( thread21 );

    var thread22 = new THREE.Mesh( geometry, material );
    thread22.position.set(.8,0.5,0);
    scene.add( thread22 );

    var thread23 = new THREE.Mesh( geometry, material );
    thread23.position.set(.6,0.5,0);
    scene.add( thread23 );

    var thread24 = new THREE.Mesh( geometry, material );
    thread24.position.set(.4,0.5,0);
    scene.add( thread24 );

    var thread25 = new THREE.Mesh( geometry, material );
    thread25.position.set(.2,0.5,0);
    scene.add( thread25 );

    var thread26 = new THREE.Mesh( geometry, material );
    thread26.position.set(0,0.5,0);
    scene.add( thread26 );

    var thread31 = new THREE.Mesh( geometry, material );
    thread31.position.set(-5,0.5,0);
    scene.add( thread31 );

    var thread32 = new THREE.Mesh( geometry, material );
    thread32.position.set(-4.8,0.5,0);
    scene.add( thread32 );

    var thread33 = new THREE.Mesh( geometry, material );
    thread33.position.set(-4.6,0.5,0);
    scene.add( thread33 );

    var thread34 = new THREE.Mesh( geometry, material );
    thread34.position.set(-4.4,0.5,0);
    scene.add( thread34 );

    var thread35 = new THREE.Mesh( geometry, material );
    thread35.position.set(-4.2,0.5,0);
    scene.add( thread35 );

    var thread36 = new THREE.Mesh( geometry, material );
    thread36.position.set(-4,0.5,0);
    scene.add( thread36 );

    var thread37 = new THREE.Mesh( geometry, material );
    thread37.position.set(-3.8,0.5,0);
    scene.add( thread37 );

    var thread38 = new THREE.Mesh( geometry, material );
    thread38.position.set(-3.6,0.5,0);
    scene.add( thread38 );

    var thread39 = new THREE.Mesh( geometry, material );
    thread39.position.set(-3.4,0.5,0);
    scene.add( thread39 );

    var thread310 = new THREE.Mesh( geometry, material );
    thread310.position.set(-3.2,0.5,0);
    scene.add( thread310 );

    var thread311 = new THREE.Mesh( geometry, material );
    thread311.position.set(-3,0.5,0);
    scene.add( thread311 );

    var thread312 = new THREE.Mesh( geometry, material );
    thread312.position.set(-2.8,0.5,0);
    scene.add( thread312 );

    var thread313 = new THREE.Mesh( geometry, material );
    thread313.position.set(-2.6,0.5,0);
    scene.add( thread313 );

    var thread314 = new THREE.Mesh( geometry, material );
    thread314.position.set(-2.4,0.5,0);
    scene.add( thread314 );

    var thread315 = new THREE.Mesh( geometry, material );
    thread315.position.set(-2.2,0.5,0);
    scene.add( thread315 );

    var thread316 = new THREE.Mesh( geometry, material );
    thread316.position.set(-2,0.5,0);
    scene.add( thread316 );

    var thread317 = new THREE.Mesh( geometry, material );
    thread317.position.set(-1.8,0.5,0);
    scene.add( thread317 );

    var thread318 = new THREE.Mesh( geometry, material );
    thread318.position.set(-1.6,0.5,0);
    scene.add( thread318 );

    var thread319 = new THREE.Mesh( geometry, material );
    thread319.position.set(-1.4,0.5,0);
    scene.add( thread319 );

    var thread320 = new THREE.Mesh( geometry, material );
    thread320.position.set(-1.2,0.5,0);
    scene.add( thread320 );

    var thread321 = new THREE.Mesh( geometry, material );
    thread321.position.set(-1,0.5,0);
    scene.add( thread321 );

    var thread322 = new THREE.Mesh( geometry, material );
    thread322.position.set(-.8,0.5,0);
    scene.add( thread322 );

    var thread323 = new THREE.Mesh( geometry, material );
    thread323.position.set(-.6,0.5,0);
    scene.add( thread323 );

    var thread324 = new THREE.Mesh( geometry, material );
    thread324.position.set(-.4,0.5,0);
    scene.add( thread324 );

    var thread325 = new THREE.Mesh( geometry, material );
    thread325.position.set(-.2,0.5,0);
    scene.add( thread325 );

    geometry = new THREE.CylinderGeometry( 0.01, 0.01, 10.4, 32 );
    var hThread1 = new THREE.Mesh( geometry, material );
    hThread1.position.set(0,1,0);
    scene.add( hThread1 );
    hThread1.rotation.z = Math.PI/2

    var hThread2 = new THREE.Mesh( geometry, material );
    hThread2.position.set(0,0.8,0);
    scene.add( hThread2 );
    hThread2.rotation.z = Math.PI/2

    var hThread3 = new THREE.Mesh( geometry, material );
    hThread3.position.set(0,0.6,0);
    scene.add( hThread3 );
    hThread3.rotation.z = Math.PI/2

    var hThread4 = new THREE.Mesh( geometry, material );
    hThread4.position.set(0,0.4,0);
    scene.add( hThread4 );
    hThread4.rotation.z = Math.PI/2

    var hThread5 = new THREE.Mesh( geometry, material );
    hThread5.position.set(0,0.2,0);
    scene.add( hThread5 );
    hThread5.rotation.z = Math.PI/2

    var hThread6 = new THREE.Mesh( geometry, material );
    hThread6.position.set(0,0,0);
    scene.add( hThread6 );
    hThread6.rotation.z = Math.PI/2

    geometry = new THREE.CylinderGeometry( 0.08, 0.08, 10.4, 32 );
    material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var cylinderA = new THREE.Mesh( geometry, material );
    cylinderA.position.set(0,1.2,0);
    //scene.add( cylinderA );
    cylinderA.rotation.z = Math.PI/2

    var mLoader = new THREE.GLTFLoader();

    mLoader.load( 'tennis_racket/scene.gltf', function ( gltf ) {
        gltf.scene.scale.multiplyScalar(1 / 10);
        scene.add( gltf.scene );    
        gltf.scene.position.set(
            camera.position.x - Math.sin(camera.rotation.y) * 0.6,
            camera.position.y - 1,
            camera.position.z + 1.5
        );
    
        gltf.scene.rotation.set(
            camera.position.x - 0.3,
            camera.position.y + 1.5,
            camera.position.z + 0.2
        );
        
        raquet = gltf.scene;

    } );

    //Luz
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(0,6,0);
    light.castShadow = true;
    light.shadow.camera.near = 25;
    light.shadow.camera.far = 25;
    scene.add(light);

    //Camara
    camera.position.set(0, player.height,-5);
    camera.lookAt(new THREE.Vector3(0,player.height,0));

    //Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    document.body.appendChild(renderer.domElement);

    animate();
}

function animate(){
    requestAnimationFrame(animate);    

    meshBall.rotation.x += 0.01;
    meshBall.rotation.y += 0.02;

    if(keyboard[37]){ //flecha izq
        camera.position.x += player.speed;
        raquet.position.x += player.speed;
        raquet.rotation.y =  (-1 * (camera.position.y));
    } else if(keyboard[39]){ //flecha der
        camera.position.x -= player.speed;  
        raquet.position.x -= player.speed;  
        raquet.rotation.y =  camera.position.y; 
    }   
    
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