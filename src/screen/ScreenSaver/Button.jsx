import gsap from "gsap";

const arrows = document.querySelectorAll(".scene-01-arrow");

export function initScene01() {
  gsap
    .timeline({ repeat: -1, repeatDelay: 2 })
    .to(arrows, {
      opacity: 0.5,
      y: -6,
      stagger: 0.2,
      duration: 1,
      ease: "power1.inOut",
    })
    .to(arrows, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power1.inOut",
    });
}