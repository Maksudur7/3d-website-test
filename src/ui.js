export class UIManager {
  constructor(appScene, buildingModel, scrollAnim, hotspotManager) {
    this.appScene = appScene;
    this.buildingModel = buildingModel;
    this.scrollAnim = scrollAnim;
    this.hotspotManager = hotspotManager;

    this.bindEvents();
  }

  bindEvents() {
    // Exploded View Range Slider
    const slider = document.getElementById('exploded-slider');
    const valBadge = document.getElementById('exploded-val');
    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (valBadge) valBadge.textContent = `${Math.round(val)}%`;
        this.scrollAnim.isManualExploded = true;
        this.buildingModel.updateExplosion(val / 100);
      });
    }

    // X-Ray Wireframe Mode Button
    const btnXray = document.getElementById('btn-xray');
    if (btnXray) {
      btnXray.addEventListener('click', () => {
        const isXray = !btnXray.classList.contains('active');
        btnXray.classList.toggle('active', isXray);
        this.buildingModel.setXrayMode(isXray);
      });
    }

    // Day / Night Lighting Mode Button
    const btnLighting = document.getElementById('btn-lighting');
    if (btnLighting) {
      btnLighting.addEventListener('click', () => {
        const isNight = this.appScene.toggleNightMode();
        btnLighting.classList.toggle('active', isNight);
      });
    }

    // Hotspot Tags Toggle Button
    const btnHotspots = document.getElementById('btn-hotspots');
    if (btnHotspots) {
      btnHotspots.addEventListener('click', () => {
        const isActive = btnHotspots.classList.contains('active');
        btnHotspots.classList.toggle('active', !isActive);
        this.hotspotManager.toggleHotspots(!isActive);
      });
    }

    // 360 Orbit Controls Toggle Button
    const btnOrbit = document.getElementById('btn-autorotate');
    if (btnOrbit) {
      btnOrbit.addEventListener('click', () => {
        const isOrbit = this.appScene.toggleOrbitControls();
        btnOrbit.classList.toggle('active', isOrbit);
      });
    }

    // Layer Isolation Selector Buttons
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        floorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const layer = btn.dataset.layer;
        this.buildingModel.isolateLayer(layer);
      });
    });

    // Technical Specs Drawer Controls
    const btnInspect = document.getElementById('btn-inspect-drawer');
    const btnClose = document.getElementById('btn-close-drawer');
    const drawer = document.getElementById('spec-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');

    if (btnInspect && drawer) {
      btnInspect.addEventListener('click', () => {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
      });
    }

    const closeDrawer = () => {
      if (drawer) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
      }
    };

    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  }
}
