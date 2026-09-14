import * as THREE from 'three';

export class HotspotManager {
  constructor(containerElem, camera) {
    this.container = containerElem;
    this.camera = camera;
    this.hotspots = [];
    this.visible = true;

    this.initHotspots();
  }

  initHotspots() {
    const hotspotData = [
      {
        id: 'hs-excavator',
        position: new THREE.Vector3(-34, 2.5, 24),
        tag: '01 • EXTERIOR GROUND YARD',
        title: 'Caterpillar CAT 330 Excavator',
        text: 'Heavy crawler backhoe outside on front yard with chrome pistons.',
        minProgress: 0.0,
        maxProgress: 0.22
      },
      {
        id: 'hs-concrete',
        position: new THREE.Vector3(8, 13.5, 8),
        tag: '02 • TOWER FACADE',
        title: 'C50 Column Grid & Glass Facade',
        text: 'Weather-resistant concrete columns & panoramic glass curtain wall.',
        minProgress: 0.20,
        maxProgress: 0.32
      },
      {
        id: 'hs-drawing',
        position: new THREE.Vector3(-6, 25.2, 7.8),
        tag: '03 • DRAWING LOUNGE 360°',
        title: 'Executive TV Console & Lounge',
        text: 'White console, 65" TV, charcoal linen sofa, rug & marble coffee table.',
        minProgress: 0.28,
        maxProgress: 0.44
      },
      {
        id: 'hs-kitchen',
        position: new THREE.Vector3(7.5, 25.2, 9.5),
        tag: '04 • KITCHEN & DINING 360°',
        title: 'L-Shaped Kitchen & Granite Counter',
        text: 'Dark granite top, chrome faucet, induction cooktop & 4-chair dining table.',
        minProgress: 0.44,
        maxProgress: 0.60
      },
      {
        id: 'hs-bedroom',
        position: new THREE.Vector3(-6.5, 25.2, -9.1),
        tag: '05 • MASTER BEDROOM 360°',
        title: 'King Bed & Canvas Art Set',
        text: 'Grey upholstered headboard, white area rug, nightstand & wall art frames.',
        minProgress: 0.60,
        maxProgress: 0.76
      },
      {
        id: 'hs-bathroom',
        position: new THREE.Vector3(6.5, 25.2, -6.5),
        tag: '06 • NAVY SPA BATHROOM 360°',
        title: 'Navy Mosaic Tiles & Bathrobes',
        text: 'Dark navy tile feature wall, white bathrobes, glass shower & wall toilet.',
        minProgress: 0.76,
        maxProgress: 0.88
      },
      {
        id: 'hs-balcony',
        position: new THREE.Vector3(1.0, 25.2, -11.5),
        tag: '07 • BALCONY & TOWER CRANE',
        title: 'Terrace Bistro & Crane Crown',
        text: 'Glass balustrade railing, outdoor bistro table & tower crane overhead.',
        minProgress: 0.88,
        maxProgress: 1.0
      }
    ];

    hotspotData.forEach(data => {
      const card = document.createElement('div');
      card.className = 'hotspot-card';
      card.id = data.id;
      card.innerHTML = `
        <div class="hotspot-content">
          <span class="hotspot-tag">${data.tag}</span>
          <div class="hotspot-title">${data.title}</div>
          <div class="hotspot-text">${data.text}</div>
        </div>
        <div class="hotspot-trigger"></div>
      `;
      this.container.appendChild(card);
      
      this.hotspots.push({
        element: card,
        position: data.position,
        minProgress: data.minProgress,
        maxProgress: data.maxProgress,
        active: false
      });
    });
  }

  updateHotspotVisibility(scrollProgress) {
    this.hotspots.forEach(hs => {
      if (scrollProgress >= hs.minProgress && scrollProgress <= hs.maxProgress) {
        hs.active = true;
      } else {
        hs.active = false;
      }
    });
  }

  toggleHotspots(enable) {
    this.visible = enable;
    if (!enable) {
      this.hotspots.forEach(hs => hs.element.classList.remove('visible'));
    }
  }

  updatePositions() {
    if (!this.visible) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const tempVec = new THREE.Vector3();

    this.hotspots.forEach(hs => {
      if (!hs.active) {
        hs.element.classList.remove('visible');
        return;
      }

      tempVec.copy(hs.position);
      tempVec.project(this.camera);

      // Check if behind camera
      if (tempVec.z > 1) {
        hs.element.classList.remove('visible');
        return;
      }

      const x = (tempVec.x * 0.5 + 0.5) * width;
      const y = (-(tempVec.y * 0.5) + 0.5) * height;

      hs.element.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`;
      hs.element.classList.add('visible');
    });
  }
}
