import { AppScene } from './scene.js';
import { BuildingModel } from './buildingModel.js';
import { HotspotManager } from './hotspots.js';
import { ScrollAnimationManager } from './scrollAnimation.js';
import { UIManager } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('webgl-canvas');
  const hotspotContainer = document.getElementById('hotspot-container');
  const fpsElem = document.getElementById('hud-fps');

  if (!canvas || !hotspotContainer) return;

  // 1. Initialize WebGL Scene Engine
  const appScene = new AppScene(canvas);

  // 2. Build 3D Architectural Model
  const buildingModel = new BuildingModel(appScene.scene);

  // 3. Initialize Spatial 3D Hotspots
  const hotspotManager = new HotspotManager(hotspotContainer, appScene.camera);

  // 4. Initialize GSAP Scroll Animation Sync
  const scrollAnim = new ScrollAnimationManager(appScene, buildingModel, hotspotManager);

  // 5. Initialize UI Deck & Controls
  new UIManager(appScene, buildingModel, scrollAnim, hotspotManager);

  // 6. Master Render Loop
  function animate() {
    requestAnimationFrame(animate);

    appScene.render((fps) => {
      if (fpsElem) fpsElem.textContent = fps;
    });

    hotspotManager.updatePositions();
  }

  animate();
});
