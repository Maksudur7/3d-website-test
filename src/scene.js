import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class AppScene {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.isNight = false;
    this.isOrbitEnabled = false;
    this.frameCount = 0;
    this.fps = 60;
    this.lastTime = performance.now();

    this.initRenderer();
    this.initScene();
    this.initCamera();
    this.initSunsetEnvironment();
    this.initLights();
    this.initControls();
    this.initEvents();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
  }

  initScene() {
    this.scene = new THREE.Scene();
    // Warm Sunset Sky Background Color
    this.scene.background = new THREE.Color(0x1c1626);
    this.scene.fog = new THREE.FogExp2(0x161220, 0.006);
  }

  initSunsetEnvironment() {
    // Photorealistic Sunset Sky Backdrop Sphere
    const skyGeo = new THREE.SphereGeometry(350, 32, 16);
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#0a0d1a');   // Night Sky Zenith
    grad.addColorStop(0.35, '#2a1b38'); // Deep Purple Twilight
    grad.addColorStop(0.7, '#ea580c');  // Warm Sunset Orange
    grad.addColorStop(0.9, '#f97316');  // Bright Horizon Flare
    grad.addColorStop(1.0, '#fbbf24');  // Golden Sunset Glow
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1, 256);

    const skyTex = new THREE.CanvasTexture(canvas);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTex,
      side: THREE.BackSide
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(skyDome);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Low-angle isometric view matching user photo composition
    this.camera.position.set(52, 22, 65);
    this.cameraTarget = new THREE.Vector3(0, 18, 0);
    this.camera.lookAt(this.cameraTarget);
  }

  initLights() {
    // Warm Sunset Ambient Light
    this.ambientLight = new THREE.AmbientLight(0xfb923c, 0.55);
    this.scene.add(this.ambientLight);

    // Sky Hemisphere Light (Warm Horizon to Dark Indigo Ground)
    this.hemiLight = new THREE.HemisphereLight(0xf97316, 0x0f172a, 0.75);
    this.scene.add(this.hemiLight);

    // Low Sunset Sun (Casts soft golden shadows & rim highlights)
    this.sunLight = new THREE.DirectionalLight(0xffaa44, 3.8);
    this.sunLight.position.set(-60, 22, -40);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 240;
    
    const d = 65;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0003;

    this.scene.add(this.sunLight);

    // Cool Cyan Rim Light (opposite side specular highlights)
    this.rimLight = new THREE.DirectionalLight(0x00f0ff, 1.4);
    this.rimLight.position.set(50, 60, 50);
    this.scene.add(this.rimLight);

    // --- LUXURY PENTHOUSE INTERIOR LED ROOM LIGHTS ---
    // Drawing Lounge Ambient Point Light
    this.drawingLight = new THREE.PointLight(0xffedd5, 1.5, 18);
    this.drawingLight.position.set(-6.0, 26.2, 7.5);
    this.scene.add(this.drawingLight);

    // Gourmet Kitchen Warm LED Point Light
    this.kitchenLight = new THREE.PointLight(0xfff7ed, 1.5, 18);
    this.kitchenLight.position.set(7.5, 26.2, 7.5);
    this.scene.add(this.kitchenLight);

    // Master Bedroom Suite Warm Lamp Light
    this.bedroomLight = new THREE.PointLight(0xfef3c7, 1.4, 18);
    this.bedroomLight.position.set(-6.5, 26.0, -9.0);
    this.scene.add(this.bedroomLight);

    // Navy Spa Bathroom Bright Vanity Light
    this.bathLight = new THREE.PointLight(0xe0f2fe, 1.4, 18);
    this.bathLight.position.set(6.5, 26.0, -6.5);
    this.scene.add(this.bathLight);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.01;
    this.controls.minDistance = 8;
    this.controls.maxDistance = 180;
    this.controls.target.copy(this.cameraTarget);
    this.controls.enabled = false;
  }

  initEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  toggleNightMode() {
    this.isNight = !this.isNight;
    if (this.isNight) {
      this.scene.background.setHex(0x030712);
      this.scene.fog.color.setHex(0x030712);
      this.ambientLight.intensity = 0.15;
      this.sunLight.intensity = 0.3;
      this.sunLight.color.setHex(0x38bdf8);
    } else {
      this.scene.background.setHex(0x1c1626);
      this.scene.fog.color.setHex(0x161220);
      this.ambientLight.intensity = 0.55;
      this.sunLight.intensity = 3.8;
      this.sunLight.color.setHex(0xffaa44);
    }
    return this.isNight;
  }

  toggleOrbitControls() {
    this.isOrbitEnabled = !this.isOrbitEnabled;
    this.controls.enabled = this.isOrbitEnabled;
    return this.isOrbitEnabled;
  }

  render(onFpsUpdate) {
    const now = performance.now();
    this.frameCount++;
    if (now - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;
      if (onFpsUpdate) onFpsUpdate(this.fps);
    }

    if (this.isOrbitEnabled) {
      this.controls.update();
    } else {
      this.camera.lookAt(this.cameraTarget);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
