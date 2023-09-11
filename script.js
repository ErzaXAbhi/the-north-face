const everest = document.querySelector(".everest");
const title = document.querySelector("h1");
const heading = document.querySelector(".heading");
const logo = document.querySelector(".logo");

gsap.to(everest, {
  y: 200,
  scrollTrigger: {
    trigger: "everest",
    scrub: true,
  },
});

gsap.to(logo, {
  y: 700,
  scrollTrigger: {
    trigger: "everest",
    scrub: true,
  },
});

gsap.from(heading, {
  y: -850,
  autoAlpha: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: "clouds",
    scrub: true,
  },
});

gsap.to(title, {
  y: 500,
  scrollTrigger: {
    trigger: "everest",
    scrub: true,
  },
});
