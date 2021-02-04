
var scene, camera, renderer;
var ball, meshBall, meshCourt, meshNet, meshTube, meshTube1, meshFloor;
var raquet;
var keyboard = {};
var player = {height:1.8, speed:0.2};

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);    

    //Variable para poder cargar texturas
    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    //Background atardecer
    scene.background = loader.load('https://i.imgur.com/brGB86a.jpg');

    //Bola
    meshBall = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 100, 100),
        new THREE.MeshPhongMaterial(
            {color: 0xffffff,
            map: loader.load('https://i.imgur.com/7EYJcU8.jpg'),
            bumpMap: loader.load('https://i.imgur.com/Vttjbxt.jpg'),
            //normalMap: loader.load('https://i.imgur.com/nnHRXkD.jpg')
            })
    );
    var ranNum = Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1);
    meshBall.position.set(ranNum, 0.2, 10);
    meshBall.receiveShadow = true;
    meshBall.castShadow = true;
    scene.add(meshBall);
    
    //Cancha
    meshCourt = new THREE.Mesh(
        new THREE.PlaneGeometry(17,30.6,10,10),
        new THREE.MeshPhongMaterial({
            color:0xffffff, 
            map: loader.load('https://i.imgur.com/nj7Zt7L.jpeg')
            //,bumpMap: loader.load('https://i.imgur.com/41OJvq8.jpg')
        })
    );
    meshCourt.rotation.x -= Math.PI / 2;
    meshCourt.position.set(0,0,0);
    meshCourt.receiveShadow = true;
    meshCourt.castShadow = true;
    scene.add(meshCourt);

    //Arena
    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(100,50.6,10,10),
        new THREE.MeshPhongMaterial({
            color:0xffffff, 
            map: loader.load('https://i.imgur.com/jJokpDh.jpg')
        })
    );
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.position.set(0,-0.001,0);
    meshFloor.receiveShadow = true;
    meshFloor.castShadow = true;
    scene.add(meshFloor);

    //Red parte de arriba        
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

    //Tubo izquierdo red
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

    //Tubo derecho red
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

    //Hilos de la redd
    geometry = new THREE.CylinderGeometry( 0.01, 0.01, 1.2, 32 );
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var thread1 = new THREE.Mesh( geometry, material );
    thread1.position.set(5,0.5,0);
    thread1.receiveShadow = true;
    thread1.castShadow = true;
    scene.add( thread1 );

    var thread2 = new THREE.Mesh( geometry, material );
    thread2.position.set(4.8,0.5,0);
    thread2.receiveShadow = true;
    thread2.castShadow = true;
    scene.add( thread2 );

    var thread3 = new THREE.Mesh( geometry, material );
    thread3.position.set(4.6,0.5,0);
    thread3.receiveShadow = true;
    thread3.castShadow = true;
    scene.add( thread3 );

    var thread4 = new THREE.Mesh( geometry, material );
    thread4.position.set(4.4,0.5,0);
    thread4.receiveShadow = true;
    thread4.castShadow = true;
    scene.add( thread4 );

    var thread5 = new THREE.Mesh( geometry, material );
    thread5.position.set(4.2,0.5,0);
    thread5.receiveShadow = true;
    thread5.castShadow = true;
    scene.add( thread5 );

    var thread6 = new THREE.Mesh( geometry, material );
    thread6.position.set(4,0.5,0);
    thread6.receiveShadow = true;
    thread6.castShadow = true;
    scene.add( thread6 );

    var thread7 = new THREE.Mesh( geometry, material );
    thread7.position.set(3.8,0.5,0);
    thread7.receiveShadow = true;
    thread7.castShadow = true;
    scene.add( thread7 );

    var thread8 = new THREE.Mesh( geometry, material );
    thread8.position.set(3.6,0.5,0);
    thread8.receiveShadow = true;
    thread8.castShadow = true;
    scene.add( thread8 );

    var thread9 = new THREE.Mesh( geometry, material );
    thread9.position.set(3.4,0.5,0);
    thread9.receiveShadow = true;
    thread9.castShadow = true;
    scene.add( thread9 );

    var thread10 = new THREE.Mesh( geometry, material );
    thread10.position.set(3.2,0.5,0);
    thread10.receiveShadow = true;
    thread10.castShadow = true;
    scene.add( thread10 );

    var thread11 = new THREE.Mesh( geometry, material );
    thread11.position.set(3,0.5,0);
    thread11.receiveShadow = true;
    thread11.castShadow = true;
    scene.add( thread11 );

    var thread12 = new THREE.Mesh( geometry, material );
    thread12.position.set(2.8,0.5,0);
    thread12.receiveShadow = true;
    thread12.castShadow = true;
    scene.add( thread12 );

    var thread13 = new THREE.Mesh( geometry, material );
    thread13.position.set(2.6,0.5,0);
    thread13.receiveShadow = true;
    thread13.castShadow = true;
    scene.add( thread13 );

    var thread14 = new THREE.Mesh( geometry, material );
    thread14.position.set(2.4,0.5,0);
    thread14.receiveShadow = true;
    thread14.castShadow = true;
    scene.add( thread14 );

    var thread15 = new THREE.Mesh( geometry, material );
    thread15.position.set(2.2,0.5,0);
    thread15.receiveShadow = true;
    thread15.castShadow = true;
    scene.add( thread15 );

    var thread16 = new THREE.Mesh( geometry, material );
    thread16.position.set(2,0.5,0);
    thread16.receiveShadow = true;
    thread16.castShadow = true;
    scene.add( thread16 );

    var thread17 = new THREE.Mesh( geometry, material );
    thread17.position.set(1.8,0.5,0);
    thread17.receiveShadow = true;
    thread17.castShadow = true;
    scene.add( thread17 );

    var thread18 = new THREE.Mesh( geometry, material );
    thread18.position.set(1.6,0.5,0);
    thread18.receiveShadow = true;
    thread18.castShadow = true;
    scene.add( thread18 );

    var thread19 = new THREE.Mesh( geometry, material );
    thread19.position.set(1.4,0.5,0);
    thread19.receiveShadow = true;
    thread19.castShadow = true;
    scene.add( thread19 );

    var thread20 = new THREE.Mesh( geometry, material );
    thread20.position.set(1.2,0.5,0);
    thread20.receiveShadow = true;
    thread20.castShadow = true;
    scene.add( thread20 );

    var thread21 = new THREE.Mesh( geometry, material );
    thread21.position.set(1,0.5,0);
    thread21.receiveShadow = true;
    thread21.castShadow = true;
    scene.add( thread21 );

    var thread22 = new THREE.Mesh( geometry, material );
    thread22.position.set(.8,0.5,0);
    thread22.receiveShadow = true;
    thread22.castShadow = true;
    scene.add( thread22 );

    var thread23 = new THREE.Mesh( geometry, material );
    thread23.position.set(.6,0.5,0);
    thread23.receiveShadow = true;
    thread23.castShadow = true;
    scene.add( thread23 );

    var thread24 = new THREE.Mesh( geometry, material );
    thread24.position.set(.4,0.5,0);
    thread24.receiveShadow = true;
    thread24.castShadow = true;
    scene.add( thread24 );

    var thread25 = new THREE.Mesh( geometry, material );
    thread25.position.set(.2,0.5,0);
    thread25.receiveShadow = true;
    thread25.castShadow = true;
    scene.add( thread25 );

    var thread26 = new THREE.Mesh( geometry, material );
    thread26.position.set(0,0.5,0);
    thread26.receiveShadow = true;
    thread26.castShadow = true;
    scene.add( thread26 );

    var thread31 = new THREE.Mesh( geometry, material );
    thread31.position.set(-5,0.5,0);
    thread31.receiveShadow = true;
    thread31.castShadow = true;
    scene.add( thread31 );

    var thread32 = new THREE.Mesh( geometry, material );
    thread32.position.set(-4.8,0.5,0);
    thread32.receiveShadow = true;
    thread32.castShadow = true;
    scene.add( thread32 );

    var thread33 = new THREE.Mesh( geometry, material );
    thread33.position.set(-4.6,0.5,0);
    thread33.receiveShadow = true;
    thread33.castShadow = true;
    scene.add( thread33 );

    var thread34 = new THREE.Mesh( geometry, material );
    thread34.position.set(-4.4,0.5,0);
    thread34.receiveShadow = true;
    thread34.castShadow = true;
    scene.add( thread34 );

    var thread35 = new THREE.Mesh( geometry, material );
    thread35.position.set(-4.2,0.5,0);
    thread35.receiveShadow = true;
    thread35.castShadow = true;
    scene.add( thread35 );

    var thread36 = new THREE.Mesh( geometry, material );
    thread36.position.set(-4,0.5,0);
    thread36.receiveShadow = true;
    thread36.castShadow = true;
    scene.add( thread36 );

    var thread37 = new THREE.Mesh( geometry, material );
    thread37.position.set(-3.8,0.5,0);
    scene.add( thread37 );

    var thread38 = new THREE.Mesh( geometry, material );
    thread38.position.set(-3.6,0.5,0);
    thread38.receiveShadow = true;
    thread38.castShadow = true;
    scene.add( thread38 );

    var thread39 = new THREE.Mesh( geometry, material );
    thread39.position.set(-3.4,0.5,0);
    thread39.receiveShadow = true;
    thread39.castShadow = true;
    scene.add( thread39 );

    var thread310 = new THREE.Mesh( geometry, material );
    thread310.position.set(-3.2,0.5,0);
    thread310.receiveShadow = true;
    thread310.castShadow = true;
    scene.add( thread310 );

    var thread311 = new THREE.Mesh( geometry, material );
    thread311.position.set(-3,0.5,0);
    thread311.receiveShadow = true;
    thread311.castShadow = true;
    scene.add( thread311 );

    var thread312 = new THREE.Mesh( geometry, material );
    thread312.position.set(-2.8,0.5,0);
    thread312.receiveShadow = true;
    thread312.castShadow = true;
    scene.add( thread312 );

    var thread313 = new THREE.Mesh( geometry, material );
    thread313.position.set(-2.6,0.5,0);
    thread313.receiveShadow = true;
    thread313.castShadow = true;
    scene.add( thread313 );

    var thread314 = new THREE.Mesh( geometry, material );
    thread314.position.set(-2.4,0.5,0);
    thread314.receiveShadow = true;
    thread314.castShadow = true;
    scene.add( thread314 );

    var thread315 = new THREE.Mesh( geometry, material );
    thread315.position.set(-2.2,0.5,0);
    thread315.receiveShadow = true;
    thread315.castShadow = true;
    scene.add( thread315 );

    var thread316 = new THREE.Mesh( geometry, material );
    thread316.position.set(-2,0.5,0);
    thread316.receiveShadow = true;
    thread316.castShadow = true;
    scene.add( thread316 );

    var thread317 = new THREE.Mesh( geometry, material );
    thread317.position.set(-1.8,0.5,0);
    thread317.receiveShadow = true;
    thread317.castShadow = true;
    scene.add( thread317 );

    var thread318 = new THREE.Mesh( geometry, material );
    thread318.position.set(-1.6,0.5,0);
    thread318.receiveShadow = true;
    thread318.castShadow = true;
    scene.add( thread318 );

    var thread319 = new THREE.Mesh( geometry, material );
    thread319.position.set(-1.4,0.5,0);
    thread319.receiveShadow = true;
    thread319.castShadow = true;
    scene.add( thread319 );

    var thread320 = new THREE.Mesh( geometry, material );
    thread320.position.set(-1.2,0.5,0);
    thread320.receiveShadow = true;
    thread320.castShadow = true;
    scene.add( thread320 );

    var thread321 = new THREE.Mesh( geometry, material );
    thread321.position.set(-1,0.5,0);
    thread321.receiveShadow = true;
    thread321.castShadow = true;
    scene.add( thread321 );

    var thread322 = new THREE.Mesh( geometry, material );
    thread322.position.set(-.8,0.5,0);
    thread322.receiveShadow = true;
    thread322.castShadow = true;
    scene.add( thread322 );

    var thread323 = new THREE.Mesh( geometry, material );
    thread323.position.set(-.6,0.5,0);
    thread323.receiveShadow = true;
    thread323.castShadow = true;
    scene.add( thread323 );

    var thread324 = new THREE.Mesh( geometry, material );
    thread324.position.set(-.4,0.5,0);
    thread324.receiveShadow = true;
    thread324.castShadow = true;
    scene.add( thread324 );

    var thread325 = new THREE.Mesh( geometry, material );
    thread325.position.set(-.2,0.5,0);
    thread325.receiveShadow = true;
    thread325.castShadow = true;
    scene.add( thread325 );

    geometry = new THREE.CylinderGeometry( 0.01, 0.01, 10.4, 32 );
    var hThread1 = new THREE.Mesh( geometry, material );
    hThread1.position.set(0,1,0);
    hThread1.receiveShadow = true;
    hThread1.castShadow = true;
    scene.add( hThread1 );
    hThread1.rotation.z = Math.PI/2

    var hThread2 = new THREE.Mesh( geometry, material );
    hThread2.position.set(0,0.8,0);
    hThread2.receiveShadow = true;
    hThread2.castShadow = true;
    scene.add( hThread2 );
    hThread2.rotation.z = Math.PI/2

    var hThread3 = new THREE.Mesh( geometry, material );
    hThread3.position.set(0,0.6,0);
    hThread3.receiveShadow = true;
    hThread3.castShadow = true;
    scene.add( hThread3 );
    hThread3.rotation.z = Math.PI/2

    var hThread4 = new THREE.Mesh( geometry, material );
    hThread4.position.set(0,0.4,0);
    hThread4.receiveShadow = true;
    hThread4.castShadow = true;
    scene.add( hThread4 );
    hThread4.rotation.z = Math.PI/2

    var hThread5 = new THREE.Mesh( geometry, material );
    hThread5.position.set(0,0.2,0);
    hThread5.receiveShadow = true;
    hThread5.castShadow = true;
    scene.add( hThread5 );
    hThread5.rotation.z = Math.PI/2

    var hThread6 = new THREE.Mesh( geometry, material );
    hThread6.position.set(0,0,0);
    hThread6.receiveShadow = true;
    hThread6.castShadow = true;
    scene.add( hThread6 );
    hThread6.rotation.z = Math.PI/2

    //Cargador de modelo y su textura
    var mLoader = new THREE.GLTFLoader();
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load( 'https://i.imgur.com/KjsSl45.jpg' );
    texture.flipY = false;

    //Modelo de raqueta
    mLoader.load( 'tennis_racket/scene.gltf', function ( gltf ) {
        gltf.scene.scale.multiplyScalar(1 / 10);
        gltf.scene.traverse ( ( o ) => {
            if ( o.isMesh ) {
              // note: for a multi-material mesh, `o.material` may be an array,
              // in which case you'd need to set `.map` on each value.
              o.material.map = texture;
            }
          } );
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
    ambientLight = new THREE.AmbientLight(0xFBE5A7, 0.8);
    scene.add(ambientLight);

    light = new THREE.PointLight(0xffffff, 1, 40);
    light.position.set(0,15,10);
    light.castShadow = true;

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

    ball = meshBall;
    animate();
}

var myTurn = true;

function animate(){
    requestAnimationFrame(animate);    

    //Rotacion constante de la bola
    ball.rotation.x += 0.1;
    ball.rotation.y += 0.2;

    if (myTurn)
    {     
        ball.position.z -= 0.2;
        if (ball.position.z >= 1)
        {
            ball.position.y += 0.05;

        }
         else if (ball.position.z < 1)
        {
            ball.position.y -= 0.08;
        }
        if (ball.position.x > (raquet.position.x - 0.2) && ball.position.x < (raquet.position.x + 0.9) 
        && ball.position.z > (raquet.position.z - 0.2) && ball.position.z < (raquet.position.z + 0.9))
        {
            myTurn = false;
        } 
        if (ball.position.z < -4)
        {             
            scene.remove(ball); 
            ball = meshBall.clone();
            var ranNum = Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1);
            ball.position.set(ranNum, 0.2, 10);
            ball.receiveShadow = true;
            ball.castShadow = true;
            scene.add(ball);  
            myTurn = true;           
        }
        
    }
    if (!myTurn)
    {
        ball.position.z += 0.2;

        if (ball.position.z < 0)
        {
            ball.position.y += 0.05;

        } 
        else if (ball.position.z > 0)
        {
            ball.position.y -= 0.03;
        }

        if (ball.position.z > 10)
        {   
            scene.remove(ball);
            ball = meshBall.clone();
            var ranNum = Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1);
            ball.position.set(ranNum, 0.2, 10);
            ball.receiveShadow = true;
            ball.castShadow = true;
            scene.add(ball);  
            myTurn = true;           
        }
    }
     
    

    if(keyboard[37])
    { //flecha izq
        camera.position.x += player.speed;
        raquet.position.x += player.speed;
        raquet.rotation.y =  (-1 * (camera.position.y));
    } 
    else if(keyboard[39])
    { //flecha der
        camera.position.x -= player.speed;  
        raquet.position.x -= player.speed;  
        raquet.rotation.y =  camera.position.y; 
    }   
    
    renderer.render(scene, camera);
}

function keyDown(event)
{
    keyboard[event.keyCode] = true;
}

function keyUp(event)
{
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;