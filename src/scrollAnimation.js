import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimationManager {
  constructor(appScene, buildingModel, hotspotManager) {
    this.appScene = appScene;
    this.buildingModel = buildingModel;
    this.hotspotManager = hotspotManager;
    this.isManualExploded = false;

    this.initTimeline();
  }

  initTimeline() {
    const camera = this.appScene.camera;
    const target = this.appScene.cameraTarget;

    // Master Seamless 8-Stage Room-by-Room 360° Orbit Camera Tour Timeline
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-track',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          this.updateHUDStatus(self.progress);
        }
      }
    });

    // Stage 1 (0.0 to 2.5): Hero Sunset Overview -> Swoop down to Ground Excavator (Vaku)
    this.timeline
      .to(camera.position, {
        x: -44,
        y: 6,
        z: 36,
        duration: 2.5,
        ease: 'power2.inOut'
      }, 0)
      .to(target, {
        x: -34,
        y: 2.5,
        z: 24,
        duration: 2.5,
        ease: 'power2.inOut'
      }, 0)
      .to({}, {
        duration: 18.0,
        onUpdate: () => {
          if (!this.isManualExploded) {
            const p = this.timeline.progress();
            let exp = 0;
            if (p <= 0.15) {
              exp = (p / 0.15) * 0.35; // Expand ground & tower view
            } else if (p <= 0.28) {
              exp = (1 - (p - 0.15) / 0.13) * 0.35; // Gently assemble back together before window entry
            } else {
              exp = 0.0; // Keep 100% assembled inside apartment rooms
            }
            this.buildingModel.updateExplosion(exp);
          }
        }
      }, 0);

    // Stage 2 (2.5 to 5.0): Smooth Glide to Front Window Approach (Elevated High-Angle View)
    this.timeline
      .to(camera.position, {
        x: 0,
        y: 26.5,
        z: 22.0,
        duration: 2.5,
        ease: 'power1.inOut'
      }, 2.5)
      .to(target, {
        x: 0,
        y: 24.0,
        z: 0,
        duration: 2.5,
        ease: 'power1.inOut'
      }, 2.5);

    // Stage 3 (5.0 to 8.0): ELEVATED 360° ORBIT DRAWING LOUNGE & MEDIA CENTER
    this.timeline
      .to(camera.position, {
        x: -3.5,
        y: 25.8,
        z: 12.5,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 5.0)
      .to(target, {
        x: -6.0,
        y: 23.5,
        z: 7.8,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 5.0)
      .to(camera.position, {
        x: -9.5,
        y: 25.8,
        z: 7.8,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 6.5)
      .to(target, {
        x: -5.5,
        y: 23.5,
        z: 7.8,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 6.5);

    // Stage 4 (8.0 to 11.0): ELEVATED 360° ORBIT GOURMET KITCHEN & DINING ZONE
    this.timeline
      .to(camera.position, {
        x: 3.5,
        y: 25.8,
        z: 12.0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 8.0)
      .to(target, {
        x: 7.5,
        y: 23.5,
        z: 7.0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 8.0)
      .to(camera.position, {
        x: 9.5,
        y: 25.8,
        z: 5.0,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 9.5)
      .to(target, {
        x: 6.5,
        y: 23.5,
        z: 7.0,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 9.5);

    // Stage 5 (11.0 to 14.0): ELEVATED 360° ORBIT MASTER BEDROOM SUITE
    this.timeline
      .to(camera.position, {
        x: -2.5,
        y: 25.8,
        z: -4.0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 11.0)
      .to(target, {
        x: -6.5,
        y: 23.5,
        z: -9.1,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 11.0)
      .to(camera.position, {
        x: -9.8,
        y: 25.8,
        z: -6.5,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 12.5)
      .to(target, {
        x: -6.5,
        y: 23.5,
        z: -10.5,
        duration: 1.5,
        ease: 'sine.inOut'
      }, 12.5);

    // Stage 6 (14.0 to 16.0): ELEVATED 360° ORBIT LUXURY NAVY SPA BATHROOM & ENTRY FOYER
    this.timeline
      .to(camera.position, {
        x: 3.5,
        y: 25.8,
        z: -3.5,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 14.0)
      .to(target, {
        x: 6.5,
        y: 23.5,
        z: -7.0,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 14.0)
      .to(camera.position, {
        x: 7.5,
        y: 25.8,
        z: -8.5,
        duration: 1.0,
        ease: 'sine.inOut'
      }, 15.0)
      .to(target, {
        x: 6.5,
        y: 23.5,
        z: -7.5,
        duration: 1.0,
        ease: 'sine.inOut'
      }, 15.0);

    // Stage 7 (16.0 to 18.0): OUTDOOR BALCONY & UN-OBSTRUCTED SKYLINE SKY FLY-OUT
    this.timeline
      .to(camera.position, {
        x: 1.0,
        y: 25.8,
        z: -10.5,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 16.0)
      .to(target, {
        x: 1.0,
        y: 24.0,
        z: -9.0,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 16.0)
      .to(camera.position, {
        x: 14.0,
        y: 35.0,
        z: 24.0,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 17.0)
      .to(target, {
        x: 4.0,
        y: 32.0,
        z: -4.0,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 17.0);
  }

  updateHUDStatus(progress) {
    const statusElem = document.getElementById('hud-structure-status');
    const sliderElem = document.getElementById('exploded-slider');
    const valElem = document.getElementById('exploded-val');

    if (!this.isManualExploded && sliderElem && valElem) {
      const expPercent = Math.round(Math.min(progress * 1.1, 0.6) * 100);
      sliderElem.value = expPercent;
      valElem.textContent = `${expPercent}%`;
    }

    if (statusElem) {
      if (progress < 0.14) statusElem.textContent = '01 • EXCAVATOR (VAKU)';
      else if (progress < 0.28) statusElem.textContent = '02 • TOWER FACADE';
      else if (progress < 0.44) statusElem.textContent = '03 • DRAWING LOUNGE 360°';
      else if (progress < 0.60) statusElem.textContent = '04 • KITCHEN & DINING 360°';
      else if (progress < 0.76) statusElem.textContent = '05 • MASTER BEDROOM 360°';
      else if (progress < 0.88) statusElem.textContent = '06 • NAVY SPA BATHROOM 360°';
      else statusElem.textContent = '07 • BALCONY & TOWER CRANE';
    }

    // Automatically trigger spatial hotspot tags for current scroll phase
    this.hotspotManager.updateHotspotVisibility(progress);
  }
}
