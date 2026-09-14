import * as THREE from 'three';

export class BuildingModel {
  constructor(scene) {
    this.scene = scene;
    this.rootGroup = new THREE.Group();

    // Layer groups for automatic scroll exploded view & interior room tour
    this.layers = {
      ground: new THREE.Group(),
      concrete: new THREE.Group(),
      facade: new THREE.Group(),
      penthouse: new THREE.Group(),
      rebar: new THREE.Group(),
      crane: new THREE.Group()
    };

    this.materials = {};
    this.explodedFactor = 0;
    this.isXray = false;

    this.initTexturesAndMaterials();
    this.buildPhotorealisticExcavatorVaku();
    this.buildConcreteStructure();
    this.buildGlassFacade();
    this.buildFloorplanApartmentMatchingImage();
    this.buildRoofTowerCrane();

    // Assemble root group
    Object.values(this.layers).forEach(layer => this.rootGroup.add(layer));
    this.scene.add(this.rootGroup);
  }

  // --- HELPER: ORGANIC PUFFY PILLOW / CUSHION GEOMETRY GENERATOR ---
  createPillowGeometry(width, height, depth, radius = 0.08) {
    const shape = new THREE.Shape();
    const w = width / 2 - radius;
    const h = depth / 2 - radius;

    shape.moveTo(-w, -h);
    shape.lineTo(w, -h);
    shape.quadraticCurveTo(w + radius, -h, w + radius, -h + radius);
    shape.lineTo(w + radius, h - radius);
    shape.quadraticCurveTo(w + radius, h + radius, w, h + radius);
    shape.lineTo(-w, h + radius);
    shape.quadraticCurveTo(-w - radius, h + radius, -w - radius, h - radius);
    shape.lineTo(-w - radius, -h + radius);
    shape.quadraticCurveTo(-w - radius, -h, -w, -h);

    const extrudeSettings = {
      steps: 1,
      depth: Math.max(0.01, height - radius * 2),
      bevelEnabled: true,
      bevelThickness: radius,
      bevelSize: radius,
      bevelOffset: 0,
      bevelSegments: 6
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    geo.rotateX(Math.PI / 2);
    return geo;
  }

  initTexturesAndMaterials() {
    // 1. Concrete PBR Texture
    const concreteCanvas = document.createElement('canvas');
    concreteCanvas.width = 512;
    concreteCanvas.height = 512;
    const ctxC = concreteCanvas.getContext('2d');
    ctxC.fillStyle = '#374151';
    ctxC.fillRect(0, 0, 512, 512);

    const imgDataC = ctxC.getImageData(0, 0, 512, 512);
    const dataC = imgDataC.data;
    for (let i = 0; i < dataC.length; i += 4) {
      const noise = (Math.random() - 0.5) * 40;
      dataC[i] = Math.min(255, Math.max(0, dataC[i] + noise));
      dataC[i + 1] = Math.min(255, Math.max(0, dataC[i + 1] + noise));
      dataC[i + 2] = Math.min(255, Math.max(0, dataC[i + 2] + noise));
    }
    ctxC.putImageData(imgDataC, 0, 0);

    ctxC.strokeStyle = 'rgba(15, 23, 42, 0.4)';
    ctxC.lineWidth = 3;
    for (let x = 0; x <= 512; x += 128) {
      ctxC.beginPath(); ctxC.moveTo(x, 0); ctxC.lineTo(x, 512); ctxC.stroke();
    }
    for (let y = 0; y <= 512; y += 128) {
      ctxC.beginPath(); ctxC.moveTo(0, y); ctxC.lineTo(512, y); ctxC.stroke();
    }

    const concreteTex = new THREE.CanvasTexture(concreteCanvas);
    concreteTex.wrapS = THREE.RepeatWrapping;
    concreteTex.wrapT = THREE.RepeatWrapping;
    concreteTex.repeat.set(2, 4);

    this.materials.concretePBR = new THREE.MeshStandardMaterial({
      map: concreteTex,
      bumpMap: concreteTex,
      bumpScale: 0.06,
      roughness: 0.85,
      metalness: 0.12
    });

    // 2. Scandinavian Oak Hardwood Parquet Texture
    const oakCanvas = document.createElement('canvas');
    oakCanvas.width = 512;
    oakCanvas.height = 512;
    const ctxW = oakCanvas.getContext('2d');
    ctxW.fillStyle = '#d97706';
    ctxW.fillRect(0, 0, 512, 512);
    ctxW.fillStyle = 'rgba(120, 53, 15, 0.25)';
    for (let y = 0; y < 512; y += 24) {
      ctxW.fillRect(0, y, 512, 2);
    }
    const oakTex = new THREE.CanvasTexture(oakCanvas);
    oakTex.wrapS = THREE.RepeatWrapping;
    oakTex.wrapT = THREE.RepeatWrapping;
    oakTex.repeat.set(4, 4);

    this.materials.oakFloor = new THREE.MeshStandardMaterial({
      map: oakTex,
      roughness: 0.3,
      metalness: 0.05
    });

    // 3. Dark Navy Mosaic Tile Texture
    const navyCanvas = document.createElement('canvas');
    navyCanvas.width = 256;
    navyCanvas.height = 256;
    const ctxN = navyCanvas.getContext('2d');
    ctxN.fillStyle = '#0f172a';
    ctxN.fillRect(0, 0, 256, 256);
    ctxN.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctxN.lineWidth = 2;
    for (let x = 0; x <= 256; x += 16) {
      ctxN.beginPath(); ctxN.moveTo(x, 0); ctxN.lineTo(x, 256); ctxN.stroke();
    }
    for (let y = 0; y <= 256; y += 16) {
      ctxN.beginPath(); ctxN.moveTo(0, y); ctxN.lineTo(256, y); ctxN.stroke();
    }
    const navyTex = new THREE.CanvasTexture(navyCanvas);
    navyTex.wrapS = THREE.RepeatWrapping;
    navyTex.wrapT = THREE.RepeatWrapping;
    navyTex.repeat.set(2, 2);

    this.materials.navyTile = new THREE.MeshStandardMaterial({
      map: navyTex,
      roughness: 0.2,
      metalness: 0.2
    });

    // 4. White Marble Texture
    const marbleCanvas = document.createElement('canvas');
    marbleCanvas.width = 256;
    marbleCanvas.height = 256;
    const ctxM = marbleCanvas.getContext('2d');
    ctxM.fillStyle = '#f8fafc';
    ctxM.fillRect(0, 0, 256, 256);
    ctxM.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctxM.lineWidth = 3;
    ctxM.beginPath(); ctxM.moveTo(0, 50); ctxM.bezierCurveTo(80, 100, 150, 20, 256, 180); ctxM.stroke();
    ctxM.beginPath(); ctxM.moveTo(40, 256); ctxM.bezierCurveTo(120, 180, 180, 220, 256, 80); ctxM.stroke();
    const marbleTex = new THREE.CanvasTexture(marbleCanvas);

    this.materials.whiteMarble = new THREE.MeshStandardMaterial({
      map: marbleTex,
      roughness: 0.15,
      metalness: 0.1
    });

    // 5. Structural Wall & Furniture Materials
    this.materials.whiteWall = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.5,
      metalness: 0.05
    });

    this.materials.beigeWall = new THREE.MeshStandardMaterial({
      color: 0xf3f4f6,
      roughness: 0.55,
      metalness: 0.05
    });

    this.materials.greyHeadboard = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65,
      metalness: 0.1
    });

    this.materials.darkGranite = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.3
    });

    this.materials.chromePiston = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.95,
      roughness: 0.08
    });

    this.materials.brassGold = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.2
    });

    this.materials.yellowMachinery = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.35,
      metalness: 0.75
    });

    this.materials.darkSteelTrack = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
      metalness: 0.85
    });

    this.materials.glassPanoramic = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      transparent: true,
      opacity: 0.35,
      ior: 1.5,
      reflectivity: 0.95
    });

    this.materials.waterCyan = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.7
    });

    this.materials.porcelainWhite = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.12,
      metalness: 0.05
    });

    this.materials.fabricCharcoal = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.85,
      metalness: 0.05
    });

    this.materials.greenPlant = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.5
    });

    // 6. TV Display Screen Canvas Texture
    const tvCanvas = document.createElement('canvas');
    tvCanvas.width = 512;
    tvCanvas.height = 288;
    const ctxTV = tvCanvas.getContext('2d');
    const gradTV = ctxTV.createLinearGradient(0, 0, 512, 288);
    gradTV.addColorStop(0, '#0f172a');
    gradTV.addColorStop(0.5, '#1e1b4b');
    gradTV.addColorStop(1, '#0284c7');
    ctxTV.fillStyle = gradTV;
    ctxTV.fillRect(0, 0, 512, 288);
    ctxTV.fillStyle = '#38bdf8';
    ctxTV.font = 'bold 26px sans-serif';
    ctxTV.fillText('APEX PENTHOUSE 4D', 40, 140);
    ctxTV.fillStyle = '#94a3b8';
    ctxTV.font = '16px sans-serif';
    ctxTV.fillText('Ultra Luxury Architectural Showcase', 40, 180);
    const tvTex = new THREE.CanvasTexture(tvCanvas);

    this.materials.tvScreenDisplay = new THREE.MeshBasicMaterial({
      map: tvTex
    });

    // 7. Laptop Active Glowing Display Screen
    const laptopCanvas = document.createElement('canvas');
    laptopCanvas.width = 512;
    laptopCanvas.height = 320;
    const ctxLap = laptopCanvas.getContext('2d');
    ctxLap.fillStyle = '#0f172a';
    ctxLap.fillRect(0, 0, 512, 320);

    ctxLap.fillStyle = '#1e293b';
    ctxLap.fillRect(0, 0, 512, 32);
    ctxLap.fillStyle = '#ef4444'; ctxLap.beginPath(); ctxLap.arc(20, 16, 5, 0, Math.PI * 2); ctxLap.fill();
    ctxLap.fillStyle = '#f59e0b'; ctxLap.beginPath(); ctxLap.arc(36, 16, 5, 0, Math.PI * 2); ctxLap.fill();
    ctxLap.fillStyle = '#10b981'; ctxLap.beginPath(); ctxLap.arc(52, 16, 5, 0, Math.PI * 2); ctxLap.fill();

    ctxLap.fillStyle = '#38bdf8';
    ctxLap.font = 'bold 16px monospace';
    ctxLap.fillText('const penthouse = new ArchitecturalModel();', 30, 75);
    ctxLap.fillStyle = '#a855f7';
    ctxLap.fillText('penthouse.render({ luxury: true, organic: true });', 30, 110);
    ctxLap.fillStyle = '#22c55e';
    ctxLap.fillText('// 3D Engine: Operational (60 FPS)', 30, 145);

    ctxLap.fillStyle = '#1e293b';
    ctxLap.fillRect(30, 170, 452, 120);
    ctxLap.fillStyle = '#0284c7';
    ctxLap.fillRect(40, 180, 432, 100);

    ctxLap.beginPath();
    ctxLap.moveTo(50, 260);
    ctxLap.lineTo(120, 220);
    ctxLap.lineTo(190, 245);
    ctxLap.lineTo(260, 195);
    ctxLap.lineTo(330, 215);
    ctxLap.lineTo(400, 190);
    ctxLap.lineTo(460, 210);
    ctxLap.lineWidth = 4;
    ctxLap.strokeStyle = '#38bdf8';
    ctxLap.stroke();

    const laptopTex = new THREE.CanvasTexture(laptopCanvas);
    this.materials.laptopScreenDisplay = new THREE.MeshBasicMaterial({
      map: laptopTex
    });

    this.materials.ledGlow = new THREE.MeshBasicMaterial({
      color: 0xfef08a
    });

    this.materials.velvetTeal = new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      roughness: 0.7,
      metalness: 0.15
    });

    this.materials.appleGreen = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.25,
      metalness: 0.1
    });

    this.materials.lampGlow = new THREE.MeshBasicMaterial({
      color: 0xfef08a
    });

    this.materials.wireframe = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
  }

  buildPhotorealisticExcavatorVaku() {
    // Dirt Ground Base
    const groundGeo = new THREE.PlaneGeometry(140, 140);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x0b1120, roughness: 0.98 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.layers.ground.add(ground);

    const gridHelper = new THREE.GridHelper(140, 40, 0xf97316, 0x1e293b);
    gridHelper.position.y = 0.04;
    this.layers.ground.add(gridHelper);

    // Caterpillar CAT 330 Heavy Excavator ("Vaku" / ভেকু)
    const vakuGroup = new THREE.Group();
    vakuGroup.position.set(-34, 0, 24);
    vakuGroup.rotation.y = Math.PI / 3.5;

    // Track Undercarriage (Left & Right Steel Treads)
    [-1.9, 1.9].forEach(z => {
      const treadGroup = new THREE.Group();
      treadGroup.position.set(0, 0.7, z);

      const trackBodyGeo = new THREE.BoxGeometry(6.8, 1.25, 1.1);
      const trackBody = new THREE.Mesh(trackBodyGeo, this.materials.darkSteelTrack);
      treadGroup.add(trackBody);

      [-3.1, 3.1].forEach(x => {
        const wheelGeo = new THREE.CylinderGeometry(0.65, 0.65, 1.15, 16);
        const wheel = new THREE.Mesh(wheelGeo, this.materials.darkSteelTrack);
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(x, 0, 0);
        treadGroup.add(wheel);
      });

      for (let r = -2.2; r <= 2.2; r += 0.88) {
        const rollerGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.12, 12);
        const roller = new THREE.Mesh(rollerGeo, this.materials.darkSteelTrack);
        roller.rotation.x = Math.PI / 2;
        roller.position.set(r, -0.4, 0);
        treadGroup.add(roller);
      }

      vakuGroup.add(treadGroup);
    });

    // Main Revolving Upper Body Cab
    const cab = new THREE.Group();
    cab.position.set(0, 2.55, 0);

    const cabBodyGeo = new THREE.BoxGeometry(4.0, 2.5, 3.6);
    const cabBody = new THREE.Mesh(cabBodyGeo, this.materials.yellowMachinery);
    cabBody.castShadow = true;
    cab.add(cabBody);

    const counterGeo = new THREE.BoxGeometry(1.6, 2.4, 3.5);
    const counter = new THREE.Mesh(counterGeo, this.materials.darkSteelTrack);
    counter.position.set(-2.6, 0, 0);
    cab.add(counter);

    const glassWinMat = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.95 });
    const winFrontGeo = new THREE.BoxGeometry(1.8, 1.8, 0.1);
    const winFront = new THREE.Mesh(winFrontGeo, glassWinMat);
    winFront.position.set(1.1, 0.35, 1.81);
    cab.add(winFront);

    // HIERARCHICAL JOINT ASSEMBLY (Connected Boom -> Stick -> Bucket)
    const boomGroup = new THREE.Group();
    boomGroup.position.set(1.2, 0.8, 0);
    boomGroup.rotation.z = Math.PI / 4.2;

    const boomArmGeo = new THREE.BoxGeometry(6.5, 0.85, 0.75);
    const boomArm = new THREE.Mesh(boomArmGeo, this.materials.yellowMachinery);
    boomArm.position.set(3.25, 0, 0);
    boomArm.castShadow = true;
    boomGroup.add(boomArm);

    const cylGeo1 = new THREE.CylinderGeometry(0.2, 0.2, 4.8, 16);
    const cyl1 = new THREE.Mesh(cylGeo1, this.materials.chromePiston);
    cyl1.rotation.z = -Math.PI / 12;
    cyl1.position.set(2.0, -0.6, 0.45);
    boomGroup.add(cyl1);

    const cyl2 = new THREE.Mesh(cylGeo1, this.materials.chromePiston);
    cyl2.rotation.z = -Math.PI / 12;
    cyl2.position.set(2.0, -0.6, -0.45);
    boomGroup.add(cyl2);

    const stickGroup = new THREE.Group();
    stickGroup.position.set(6.5, 0, 0);
    stickGroup.rotation.z = -Math.PI / 3.2;

    const stickArmGeo = new THREE.BoxGeometry(4.8, 0.65, 0.65);
    const stickArm = new THREE.Mesh(stickArmGeo, this.materials.yellowMachinery);
    stickArm.position.set(2.4, 0, 0);
    stickArm.castShadow = true;
    stickGroup.add(stickArm);

    const bucketGroup = new THREE.Group();
    bucketGroup.position.set(4.8, 0, 0);
    bucketGroup.rotation.z = -Math.PI / 6;

    const bucketGeo = new THREE.BoxGeometry(1.8, 1.8, 2.0);
    const bucket = new THREE.Mesh(bucketGeo, this.materials.darkSteelTrack);
    bucket.position.set(0.9, -0.9, 0);
    bucket.castShadow = true;
    bucketGroup.add(bucket);

    for (let t = -0.8; t <= 0.8; t += 0.4) {
      const toothGeo = new THREE.ConeGeometry(0.12, 0.6, 6);
      const tooth = new THREE.Mesh(toothGeo, this.materials.chromePiston);
      tooth.rotation.z = -Math.PI / 2;
      tooth.position.set(1.9, -1.5, t);
      bucketGroup.add(tooth);
    }

    stickGroup.add(bucketGroup);
    boomGroup.add(stickGroup);
    cab.add(boomGroup);
    vakuGroup.add(cab);

    this.layers.ground.add(vakuGroup);
  }

  buildConcreteStructure() {
    const floorHeights = [0, 4.5, 9.0, 13.5, 18.0, 22.5];
    const gridColsX = [-12, -4, 4, 12];
    const gridColsZ = [-12, -4, 4, 12];

    const coreGeo = new THREE.BoxGeometry(8.2, 23.5, 8.2);
    const core = new THREE.Mesh(coreGeo, this.materials.concretePBR);
    core.position.set(0, 11.75, 0);
    this.layers.concrete.add(core);

    floorHeights.forEach((y, i) => {
      if (i === 5) return; // Top penthouse floor built separately
      const slabGeo = new THREE.BoxGeometry(26.4, 0.5, 26.4);
      const slab = new THREE.Mesh(slabGeo, this.materials.concretePBR);
      slab.position.set(0, y + 0.25, 0);
      slab.receiveShadow = true;
      this.layers.concrete.add(slab);

      if (i < 5) {
        gridColsX.forEach(x => {
          gridColsZ.forEach(z => {
            if (Math.abs(x) < 5 && Math.abs(z) < 5) return;
            const colGeo = new THREE.BoxGeometry(0.85, 4.0, 0.85);
            const col = new THREE.Mesh(colGeo, this.materials.concretePBR);
            col.position.set(x, y + 2.5, z);
            col.castShadow = true;
            this.layers.concrete.add(col);
          });
        });
      }
    });
  }

  buildGlassFacade() {
    for (let floor = 0; floor < 5; floor++) {
      const y = floor * 4.5 + 2.5;
      const glassFront = new THREE.Mesh(new THREE.BoxGeometry(26.4, 4.0, 0.1), this.materials.glassPanoramic);
      glassFront.position.set(0, y, 13.0);

      const glassBack = new THREE.Mesh(new THREE.BoxGeometry(26.4, 4.0, 0.1), this.materials.glassPanoramic);
      glassBack.position.set(0, y, -13.0);

      const glassLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.0, 26.4), this.materials.glassPanoramic);
      glassLeft.position.set(-13.0, y, 0);

      const glassRight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4.0, 26.4), this.materials.glassPanoramic);
      glassRight.position.set(13.0, y, 0);

      this.layers.facade.add(glassFront, glassBack, glassLeft, glassRight);
    }
  }

  buildFloorplanApartmentMatchingImage() {
    // Upper Penthouse Level (Height y = 22.5m - ZERO GAP on top of building columns)
    const flatGroup = new THREE.Group();
    flatGroup.position.set(0, 22.5, 0);

    // 1. Scandinavian Oak Floor Base (y: 0 to 0.6)
    const floorGeo = new THREE.BoxGeometry(26.4, 0.6, 26.4);
    const floor = new THREE.Mesh(floorGeo, this.materials.oakFloor);
    floor.position.set(0, 0.3, 0);
    floor.receiveShadow = true;
    flatGroup.add(floor);

    // Area Rugs
    const bedRug = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.04, 5.2), this.materials.porcelainWhite);
    bedRug.position.set(-6.5, 0.62, -9.0);
    bedRug.receiveShadow = true;

    const sofaRug = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.04, 4.0), this.materials.porcelainWhite);
    sofaRug.position.set(-6.0, 0.62, 8.5);
    sofaRug.receiveShadow = true;
    flatGroup.add(bedRug, sofaRug);

    // 2. Solid Concrete Ceiling Roof Slab Overhead (Height y = 28.5m)
    const roofSlabGeo = new THREE.BoxGeometry(26.4, 0.6, 26.4);
    const roofSlab = new THREE.Mesh(roofSlabGeo, this.materials.concretePBR);
    roofSlab.position.set(0, 6.3, 0);
    roofSlab.castShadow = true;
    roofSlab.receiveShadow = true;
    flatGroup.add(roofSlab);

    // 3. Low Cutaway Exterior Perimeter Walls
    const backWallLeft = new THREE.Mesh(new THREE.BoxGeometry(10.0, 2.0, 0.4), this.materials.whiteWall);
    backWallLeft.position.set(-8.0, 1.6, -13.0);
    const backWallRight = new THREE.Mesh(new THREE.BoxGeometry(6.0, 2.0, 0.4), this.materials.whiteWall);
    backWallRight.position.set(10.0, 1.6, -13.0);
    flatGroup.add(backWallLeft, backWallRight);

    // Front Exterior Window Glass Wall
    const winWall = new THREE.Mesh(new THREE.BoxGeometry(26.4, 5.4, 0.2), this.materials.glassPanoramic);
    winWall.position.set(0, 3.3, 13.0);
    flatGroup.add(winWall);

    // Left & Right Outer Walls
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.0, 26.4), this.materials.beigeWall);
    leftWall.position.set(-13.0, 1.6, 0);
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.0, 26.4), this.materials.whiteWall);
    rightWall.position.set(13.0, 1.6, 0);
    flatGroup.add(leftWall, rightWall);

    // 4. Architectural Partition Walls
    const spineWallSouth = new THREE.Mesh(new THREE.BoxGeometry(0.35, 2.0, 8.0), this.materials.beigeWall);
    spineWallSouth.position.set(0, 1.6, 8.5);
    const spineWallNorth = new THREE.Mesh(new THREE.BoxGeometry(0.35, 2.0, 8.0), this.materials.beigeWall);
    spineWallNorth.position.set(0, 1.6, -8.5);
    flatGroup.add(spineWallSouth, spineWallNorth);

    const bedWallLeft = new THREE.Mesh(new THREE.BoxGeometry(8.0, 2.0, 0.35), this.materials.beigeWall);
    bedWallLeft.position.set(-8.5, 1.6, -1.0);
    flatGroup.add(bedWallLeft);

    const bathWallRight = new THREE.Mesh(new THREE.BoxGeometry(8.0, 2.0, 0.35), this.materials.navyTile);
    bathWallRight.position.set(8.5, 1.6, -1.0);
    flatGroup.add(bathWallRight);

    // =========================================================================
    // --- ZONE 1: DRAWING / LIVING LOUNGE (Polished & Organic Furniture) ---
    // =========================================================================
    // Media Console Unit & 65" TV with Active Screen Canvas Display
    const tvUnit = new THREE.Mesh(new THREE.BoxGeometry(5.6, 1.0, 0.9), this.materials.porcelainWhite);
    tvUnit.position.set(-6.0, 0.8, 5.5);

    const tvScreenFrame = new THREE.Mesh(new THREE.BoxGeometry(4.4, 2.5, 0.08), this.materials.darkSteelTrack);
    tvScreenFrame.position.set(-6.0, 2.7, 5.5);

    const tvScreenActive = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.3, 0.09), this.materials.tvScreenDisplay);
    tvScreenActive.position.set(-6.0, 2.7, 5.51);

    const tvSoundbar = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.18, 0.25), this.materials.darkSteelTrack);
    tvSoundbar.position.set(-6.0, 1.4, 5.5);
    flatGroup.add(tvUnit, tvScreenFrame, tvScreenActive, tvSoundbar);

    // Modular Sectional Sofa with Organic Curved Cushions (Clean, no weird box protrudings!)
    const sofaSeatMain = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.45, 1.8), this.materials.fabricCharcoal);
    sofaSeatMain.position.set(-6.0, 0.825, 10.0);

    const sofaBackMain = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.85, 0.45), this.materials.fabricCharcoal);
    sofaBackMain.position.set(-6.0, 1.3, 10.7);

    const sofaArmL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.75, 2.25), this.materials.fabricCharcoal);
    sofaArmL.position.set(-8.4, 0.975, 9.8);

    const sofaArmR = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.75, 2.25), this.materials.fabricCharcoal);
    sofaArmR.position.set(-3.6, 0.975, 9.8);

    const sofaBlanket = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.04, 1.4), this.materials.velvetTeal);
    sofaBlanket.rotation.y = Math.PI / 12;
    sofaBlanket.position.set(-8.3, 1.36, 9.7);
    flatGroup.add(sofaSeatMain, sofaBackMain, sofaArmL, sofaArmR, sofaBlanket);

    // 3 ORGANIC PUFFY THROW CUSHIONS ON SOFA (Using organic geometry!)
    const sofaPillowGeo = this.createPillowGeometry(0.75, 0.22, 0.5, 0.08);
    [-7.2, -6.0, -4.8].forEach((px, idx) => {
      const pillowMat = idx === 1 ? this.materials.velvetTeal : this.materials.porcelainWhite;
      const pillow = new THREE.Mesh(sofaPillowGeo, pillowMat);
      pillow.rotation.set(-Math.PI / 7, 0, (idx - 1) * 0.15);
      pillow.position.set(px, 1.18, 10.38);
      flatGroup.add(pillow);
    });

    // Rectangular White Marble Coffee Table
    const coffeeTop = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 1.4), this.materials.whiteMarble);
    coffeeTop.position.set(-6.0, 0.65, 7.8);
    [-1.05, 1.05].forEach(lx => {
      [-0.5, 0.5].forEach(lz => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.6, 10), this.materials.chromePiston);
        leg.position.set(-6.0 + lx, 0.3, 7.8 + lz);
        flatGroup.add(leg);
      });
    });
    flatGroup.add(coffeeTop);

    // SLEEK OPEN LAPTOP (MacBook Style with ACTIVE GLOWING IDE SCREEN)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(-6.7, 0.69, 7.7);

    // Sleek Aluminium Casing Base
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.02, 0.46), this.materials.chromePiston);
    laptopBase.position.set(0, 0.01, 0);

    // Trackpad
    const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.002, 0.14), this.materials.darkSteelTrack);
    trackpad.position.set(0, 0.021, 0.12);

    // Keyboard Area
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.002, 0.22), this.materials.darkSteelTrack);
    keyboard.position.set(0, 0.021, -0.08);

    // Angled Lid with Glowing Screen
    const laptopLidGroup = new THREE.Group();
    laptopLidGroup.position.set(0, 0.02, -0.22);
    laptopLidGroup.rotation.x = -Math.PI / 6;

    const laptopLidBack = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.44, 0.015), this.materials.chromePiston);
    laptopLidBack.position.set(0, 0.22, 0);

    const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.40, 0.005), this.materials.laptopScreenDisplay);
    laptopScreen.position.set(0, 0.22, 0.009);

    laptopLidGroup.add(laptopLidBack, laptopScreen);
    laptopGroup.add(laptopBase, trackpad, keyboard, laptopLidGroup);
    flatGroup.add(laptopGroup);

    // HARDCOVER BOOKS & TEA CUP (Cleanly positioned with NO clipping into laptop!)
    const book1 = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.04, 0.36), this.materials.brassGold);
    book1.position.set(-5.7, 0.71, 8.1);
    book1.rotation.y = Math.PI / 18;

    const book2 = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 0.32), this.materials.fabricCharcoal);
    book2.position.set(-5.7, 0.75, 8.1);
    book2.rotation.y = -Math.PI / 12;

    const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 20), this.materials.porcelainWhite);
    saucer.position.set(-5.3, 0.70, 7.4);
    const cupBody = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.15, 16), this.materials.porcelainWhite);
    cupBody.position.set(-5.3, 0.785, 7.4);
    const cupHandle = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 8, 16), this.materials.porcelainWhite);
    cupHandle.position.set(-5.2, 0.785, 7.4);

    flatGroup.add(book1, book2, saucer, cupBody, cupHandle);

    // Executive Corner Study Desk & Swivel Chair
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.08, 1.5), this.materials.porcelainWhite);
    deskTop.position.set(-10.5, 1.25, 2.5);
    [-1.2, 1.2].forEach(dx => {
      const dLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 10), this.materials.chromePiston);
      dLeg.position.set(-10.5 + dx, 0.6, 2.5);
      flatGroup.add(dLeg);
    });
    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.08, 0.65), this.materials.fabricCharcoal);
    chairSeat.position.set(-10.5, 0.85, 1.0);
    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.08), this.materials.fabricCharcoal);
    chairBack.position.set(-10.5, 1.25, 0.65);
    flatGroup.add(deskTop, chairSeat, chairBack);

    // =========================================================================
    // --- ZONE 2: GOURMET KITCHEN & DINING (Scandinavian Modern Chairs) ---
    // =========================================================================
    // L-Shaped Cabinetry with Dark Granite Countertop
    const kitchenCab = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.25, 2.2), this.materials.porcelainWhite);
    kitchenCab.position.set(7.5, 0.925, 9.5);
    const graniteTop = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.1, 2.3), this.materials.darkGranite);
    graniteTop.position.set(7.5, 1.6, 9.5);

    // Stainless Sink & Swan-Neck Chrome Faucet
    const sink = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.02, 1.2), this.materials.chromePiston);
    sink.position.set(9.0, 1.66, 9.5);
    const faucetArch = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.035, 10, 20, Math.PI), this.materials.chromePiston);
    faucetArch.rotation.z = Math.PI / 2;
    faucetArch.position.set(9.0, 1.95, 9.5);

    // Cooktop & Wall Cabinets & Refrigerator
    const cooktop = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.02, 1.2), this.materials.darkSteelTrack);
    cooktop.position.set(6.5, 1.66, 9.5);
    const wallCab = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.2, 1.1), this.materials.porcelainWhite);
    wallCab.position.set(7.5, 4.4, 9.5);
    const fridge = new THREE.Mesh(new THREE.BoxGeometry(1.8, 4.4, 1.8), this.materials.chromePiston);
    fridge.position.set(11.2, 2.5, 9.5);
    flatGroup.add(kitchenCab, graniteTop, sink, faucetArch, cooktop, wallCab, fridge);

    // Rectangular Oak Dining Table
    const diningTableTop = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.08, 1.8), this.materials.oakFloor);
    diningTableTop.position.set(6.5, 1.35, 3.5);
    [-1.5, 1.5].forEach(dx => {
      [-0.7, 0.7].forEach(dz => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.3, 10), this.materials.darkSteelTrack);
        leg.position.set(6.5 + dx, 0.65, 3.5 + dz);
        flatGroup.add(leg);
      });
    });
    flatGroup.add(diningTableTop);

    // 4 MODERN SCANDINAVIAN DINING CHAIRS (With angled legs, upholstered seats & backrests!)
    const chairSeatsGeo = this.createPillowGeometry(0.58, 0.08, 0.55, 0.04);
    const chairBackGeo = this.createPillowGeometry(0.58, 0.48, 0.06, 0.03);

    const chairConfigs = [
      { x: 5.4, z: 2.3, rotY: Math.PI / 6 },
      { x: 7.6, z: 2.3, rotY: -Math.PI / 6 },
      { x: 5.4, z: 4.7, rotY: Math.PI - Math.PI / 6 },
      { x: 7.6, z: 4.7, rotY: Math.PI + Math.PI / 6 }
    ];

    chairConfigs.forEach(cfg => {
      const chairGroup = new THREE.Group();
      chairGroup.position.set(cfg.x, 0.6, cfg.z);
      chairGroup.rotation.y = cfg.rotY;

      // 4 Angled Metallic/Wooden Legs
      [[-0.22, -0.2], [0.22, -0.2], [-0.22, 0.2], [0.22, 0.2]].forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.018, 0.8, 10), this.materials.darkSteelTrack);
        leg.position.set(lx, 0.4, lz);
        leg.rotation.z = lx > 0 ? -0.1 : 0.1;
        leg.rotation.x = lz > 0 ? -0.1 : 0.1;

        const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.027, 0.027, 0.08, 10), this.materials.brassGold);
        tip.position.set(lx, 0.04, lz);

        chairGroup.add(leg, tip);
      });

      // Upholstered Cushion Seat
      const cSeat = new THREE.Mesh(chairSeatsGeo, this.materials.greyHeadboard);
      cSeat.position.set(0, 0.82, 0);

      // Ergonomic Backrest Frame Posts & Curved Backrest
      [-0.22, 0.22].forEach(px => {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.55, 8), this.materials.darkSteelTrack);
        post.position.set(px, 1.05, 0.22);
        chairGroup.add(post);
      });

      const cBack = new THREE.Mesh(chairBackGeo, this.materials.greyHeadboard);
      cBack.position.set(0, 1.25, 0.22);
      cBack.rotation.x = -Math.PI / 18;

      chairGroup.add(cSeat, cBack);
      flatGroup.add(chairGroup);
    });

    // Wine Bottle & Ceramic Fruit Bowl with Green Apples
    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.65, 14), this.materials.greenPlant);
    bottle.position.set(6.5, 1.7, 3.5);
    const fruitBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.2, 0.15, 16), this.materials.porcelainWhite);
    fruitBowl.position.set(7.2, 1.45, 3.5);
    [-0.1, 0.1].forEach(ax => {
      const apple = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), this.materials.appleGreen);
      apple.position.set(7.2 + ax, 1.58, 3.5 + ax);
      flatGroup.add(apple);
    });
    flatGroup.add(bottle, fruitBowl);

    // =========================================================================
    // --- ZONE 3: MASTER BEDROOM SUITE (Natural Organic Pillow Shapes) ---
    // =========================================================================
    // Upholstered Headboard Flush Against Wall with Ambient LED Backlight
    const bedHeadPanel = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.2, 0.25), this.materials.greyHeadboard);
    bedHeadPanel.position.set(-6.5, 1.7, -12.5);

    const headboardLed = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.06, 0.05), this.materials.ledGlow);
    headboardLed.position.set(-6.5, 2.82, -12.55);

    for (let rx = -1.6; rx <= 1.6; rx += 0.8) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.1, 0.08), this.materials.greyHeadboard);
      rib.position.set(-6.5 + rx, 1.7, -12.35);
      flatGroup.add(rib);
    }

    // Clean Rectangular Mattress & Layered Duvet Sheet Runner
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.5, 4.4), this.materials.porcelainWhite);
    mattress.position.set(-6.5, 0.85, -10.0);

    const duvetFlat = new THREE.Mesh(new THREE.BoxGeometry(3.62, 0.08, 2.4), this.materials.fabricCharcoal);
    duvetFlat.position.set(-6.5, 1.14, -9.0);
    flatGroup.add(bedHeadPanel, headboardLed, mattress, duvetFlat);

    // 4 ORGANIC PUFFY BED PILLOWS (Extruded rounded shapes - 2 White + 2 Teal Velvet!)
    const bedPillowLargeGeo = this.createPillowGeometry(1.15, 0.25, 0.65, 0.1);
    const bedPillowAccentGeo = this.createPillowGeometry(0.95, 0.20, 0.55, 0.08);

    [-1.0, 1.0].forEach(px => {
      // White luxury sleeping pillow propped against headboard
      const pillowW = new THREE.Mesh(bedPillowLargeGeo, this.materials.porcelainWhite);
      pillowW.rotation.x = -Math.PI / 7;
      pillowW.position.set(-6.5 + px, 1.25, -11.75);

      // Velvet Teal decorative accent cushion in front
      const pillowG = new THREE.Mesh(bedPillowAccentGeo, this.materials.velvetTeal);
      pillowG.rotation.x = -Math.PI / 6;
      pillowG.position.set(-6.5 + px, 1.34, -11.35);

      flatGroup.add(pillowW, pillowG);
    });

    // Dual Nightstands & Brass Table Lamps
    [-9.5, -3.5].forEach(nx => {
      const nightstand = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), this.materials.darkSteelTrack);
      nightstand.position.set(nx, 1.05, -12.0);
      const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.18, 0.45, 16), this.materials.brassGold);
      lampBase.position.set(nx, 1.72, -12.0);
      const lampShade = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.55, 20), this.materials.lampGlow);
      lampShade.position.set(nx, 2.15, -12.0);
      flatGroup.add(nightstand, lampBase, lampShade);
    });

    // 3 Wall-Mounted Art Frames
    [-1.4, 0, 1.4].forEach(ax => {
      const artFrame = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.35, 0.05), this.materials.porcelainWhite);
      artFrame.position.set(-6.5 + ax, 3.5, -12.85);
      const artCanvas = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.07), this.materials.navyTile);
      artCanvas.position.set(-6.5 + ax, 3.5, -12.85);
      flatGroup.add(artFrame, artCanvas);
    });

    // Wardrobe Closet
    const closet = new THREE.Mesh(new THREE.BoxGeometry(3.4, 4.6, 1.3), this.materials.porcelainWhite);
    closet.position.set(-11.0, 2.6, -6.5);
    flatGroup.add(closet);

    // =========================================================================
    // --- ZONE 4: LUXURY NAVY SPA BATHROOM (Clean Fixtures & Organic Shapes) ---
    // =========================================================================
    // Navy Tile Floor Base
    const bathFloor = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.05, 6.0), this.materials.navyTile);
    bathFloor.position.set(6.5, 0.62, -6.5);
    flatGroup.add(bathFloor);

    // PLUSH WHITE BATHMAT ON TILE FLOOR (Replaces stray plain box!)
    const bathmatGeo = this.createPillowGeometry(2.4, 0.04, 1.6, 0.04);
    const bathmat = new THREE.Mesh(bathmatGeo, this.materials.porcelainWhite);
    bathmat.position.set(6.5, 0.66, -6.2);
    flatGroup.add(bathmat);

    // LOW SPA TEAK BENCH / STOOL
    const stoolTop = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.45), this.materials.oakFloor);
    stoolTop.position.set(4.6, 0.95, -4.5);
    [-0.35, 0.35].forEach(sx => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.32, 10), this.materials.darkSteelTrack);
      leg.position.set(4.6 + sx, 0.78, -4.5);
      flatGroup.add(leg);
    });
    flatGroup.add(stoolTop);

    // Freestanding Oval Spa Bathtub with Water Surface & Teak Bath Caddy
    const tubGroup = new THREE.Group();
    tubGroup.position.set(6.5, 1.07, -8.8);

    const tubOuter = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.2, 0.9, 32), this.materials.porcelainWhite);
    tubOuter.scale.set(1.3, 1.0, 0.75);

    const tubInner = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.1, 0.85, 32), this.materials.porcelainWhite);
    tubInner.scale.set(1.25, 1.0, 0.7);
    tubInner.position.y = 0.05;

    const tubWater = new THREE.Mesh(new THREE.CylinderGeometry(1.28, 1.08, 0.02, 32), this.materials.waterCyan);
    tubWater.scale.set(1.24, 1.0, 0.68);
    tubWater.position.y = 0.32;

    tubGroup.add(tubOuter, tubWater);

    // Brass Floor-Standing Gooseneck Tub Filler Faucet
    const tubFillerGroup = new THREE.Group();
    tubFillerGroup.position.set(4.7, 0.62, -8.8);

    const fillerStand = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.3, 12), this.materials.brassGold);
    fillerStand.position.y = 0.65;

    const fillerSpout = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 10, 20, Math.PI), this.materials.brassGold);
    fillerSpout.rotation.z = -Math.PI / 2;
    fillerSpout.position.set(0.18, 1.3, 0);

    const handleH = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 8), this.materials.brassGold);
    handleH.rotation.z = Math.PI / 2;
    handleH.position.set(0, 0.95, 0.08);

    tubFillerGroup.add(fillerStand, fillerSpout, handleH);

    // Teak Bath Tray across tub
    const bathTray = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.04, 0.38), this.materials.oakFloor);
    bathTray.position.set(6.5, 1.52, -8.8);

    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12), this.materials.porcelainWhite);
    candle.position.set(6.2, 1.60, -8.8);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.06, 8), this.materials.ledGlow);
    flame.position.set(6.2, 1.69, -8.8);

    flatGroup.add(tubGroup, tubFillerGroup, bathTray, candle, flame);

    // Wall-Hung Toilet Bowl & Flush Plate
    const toiletBowl = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.45, 0.8), this.materials.porcelainWhite);
    toiletBowl.position.set(4.5, 0.95, -6.5);
    const flushPlate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.04), this.materials.chromePiston);
    flushPlate.position.set(4.5, 1.8, -9.4);
    flatGroup.add(toiletBowl, flushPlate);

    // Vanity, Backlit Illuminated Mirror & Folded Towels
    const vanity = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.0, 1.1), this.materials.porcelainWhite);
    vanity.position.set(8.5, 1.1, -4.5);
    const mirrorFrame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.0, 0.06), this.materials.chromePiston);
    mirrorFrame.position.set(8.5, 3.0, -3.6);
    const mirrorLed = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.1, 0.04), this.materials.ledGlow);
    mirrorLed.position.set(8.5, 3.0, -3.62);
    const towels = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.4), this.materials.porcelainWhite);
    towels.position.set(8.5, 1.675, -4.5);
    flatGroup.add(vanity, mirrorFrame, mirrorLed, towels);

    // =========================================================================
    // --- ZONE 5: OUTDOOR BALCONY TERRACE & POTTED MONSTERA PLANT ---
    // =========================================================================
    const railFront = new THREE.Mesh(new THREE.BoxGeometry(10.0, 1.2, 0.08), this.materials.glassPanoramic);
    railFront.position.set(1.0, 1.2, -12.9);
    const railCap = new THREE.Mesh(new THREE.BoxGeometry(10.0, 0.08, 0.12), this.materials.chromePiston);
    railCap.position.set(1.0, 1.82, -12.9);
    flatGroup.add(railFront, railCap);

    // Teak Bistro Table & 2 Patio Chairs
    const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.06, 24), this.materials.oakFloor);
    tableTop.position.set(1.0, 1.2, -10.5);
    const tablePedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.22, 1.1, 14), this.materials.darkSteelTrack);
    tablePedestal.position.set(1.0, 0.6, -10.5);
    flatGroup.add(tableTop, tablePedestal);

    [-1.1, 1.1].forEach(cx => {
      const bChairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.55), this.materials.darkSteelTrack);
      bChairSeat.position.set(1.0 + cx, 0.85, -10.5);
      const bChairBack = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.06), this.materials.darkSteelTrack);
      bChairBack.position.set(1.0 + cx, 1.2, -10.5);
      const bChairCushion = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.5), this.materials.porcelainWhite);
      bChairCushion.position.set(1.0 + cx, 0.9, -10.5);
      flatGroup.add(bChairSeat, bChairBack, bChairCushion);
    });

    // Potted Leafy Monstera Plant (Clean stems branching naturally from pot!)
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.3, 0.9, 20), this.materials.porcelainWhite);
    pot.position.set(5.0, 1.05, -10.5);
    flatGroup.add(pot);

    const plantSoil = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.04, 20), this.materials.darkSteelTrack);
    plantSoil.position.set(5.0, 1.48, -10.5);
    flatGroup.add(plantSoil);

    [
      { rx: 0.15, ry: 0.3, px: -0.08, pz: -0.08 },
      { rx: -0.2, ry: -0.5, px: 0.08, pz: 0.08 },
      { rx: 0.25, ry: 1.2, px: 0.0, pz: 0.1 },
      { rx: -0.15, ry: 2.1, px: -0.1, pz: 0.05 },
      { rx: 0.2, ry: -1.8, px: 0.1, pz: -0.08 },
      { rx: 0.35, ry: 0.8, px: 0.05, pz: -0.1 },
      { rx: -0.25, ry: -1.2, px: -0.08, pz: 0.1 }
    ].forEach(leaf => {
      const stemGroup = new THREE.Group();
      stemGroup.position.set(5.0 + leaf.px, 1.5, -10.5 + leaf.pz);
      stemGroup.rotation.set(leaf.rx, leaf.ry, 0);

      const leafStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.75, 8), this.materials.greenPlant);
      leafStem.position.set(0, 0.375, 0);

      const leafBlade = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.015, 0.48), this.materials.greenPlant);
      leafBlade.position.set(0, 0.75, 0.1);
      leafBlade.rotation.x = 0.25;

      stemGroup.add(leafStem, leafBlade);
      flatGroup.add(stemGroup);
    });

    // Entrance Door & Handle
    const frontDoor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 4.4, 0.15), this.materials.porcelainWhite);
    frontDoor.position.set(11.0, 2.5, -1.0);
    const doorHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), this.materials.chromePiston);
    doorHandle.rotation.z = Math.PI / 2;
    doorHandle.position.set(10.4, 2.5, -0.9);
    flatGroup.add(frontDoor, doorHandle);

    this.layers.penthouse.add(flatGroup);
  }

  buildRoofTowerCrane() {
    const craneGroup = new THREE.Group();
    craneGroup.position.set(4, 29.5, -4);

    const mastGeo = new THREE.BoxGeometry(2.2, 16, 2.2);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, wireframe: true });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.set(0, 8, 0);
    craneGroup.add(mast);

    const jibGeo = new THREE.BoxGeometry(34, 1.4, 1.4);
    const jibMat = new THREE.MeshStandardMaterial({ color: 0xd97706, wireframe: true });
    const jib = new THREE.Mesh(jibGeo, jibMat);
    jib.position.set(-8, 17.5, 0);
    craneGroup.add(jib);

    this.layers.crane.add(craneGroup);
  }

  updateExplosion(factor) {
    this.explodedFactor = factor;
    this.layers.ground.position.y = -factor * 10;
    this.layers.concrete.position.y = 0;
    this.layers.facade.position.y = factor * 6;
    this.layers.penthouse.position.y = factor * 14;
    this.layers.crane.position.y = factor * 22;
  }

  setXrayMode(enable) {
    this.isXray = enable;
    this.rootGroup.traverse((child) => {
      if (child.isMesh) {
        if (enable) {
          if (!child.userData.origMat) child.userData.origMat = child.material;
          child.material = this.materials.wireframe;
        } else {
          if (child.userData.origMat) child.material = child.userData.origMat;
        }
      }
    });
  }

  isolateLayer(layerName) {
    Object.keys(this.layers).forEach(key => {
      if (layerName === 'all' || key === layerName) {
        this.layers[key].visible = true;
      } else {
        this.layers[key].visible = false;
      }
    });
  }
}
