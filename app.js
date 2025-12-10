const tl = gsap.timeline();

tl.from(".red", { x: "-100vw", y: "-100vh", opacity: 0, duration: 0.5 })
  .from(".green", { x: "100vw", y: "-100vh", opacity: 0, duration: 0.5 })
  .from(".blue", { x: "100vw", y: "100vh", opacity: 0, duration: 0.5 })
  .from(".yellow", { x: "-100vw", y: "100vh", opacity: 0, duration: 0.5 });

tl.to(".red", {
  left: "100%",
  xPercent: -100,
  backgroundColor: "green",
  borderRadius: "50%",
  duration: 2,
});

tl.to(
  ".green",
  {
    top: "100%",
    yPercent: -100,
    backgroundColor: "blue",
    borderRadius: "50%",
    duration: 2,
  },
  "<"
);

tl.to(
  ".blue",
  {
    right: "100%",
    xPercent: 100,
    backgroundColor: "yellow",
    borderRadius: "50%",
    duration: 2,
  },
  "<"
);

tl.to(
  ".yellow",
  {
    bottom: "100%",
    yPercent: 100,
    backgroundColor: "red",
    borderRadius: "50%",
    duration: 2,
  },
  "<"
);

tl.to(".red", { xPercent: 0, opacity: 0, duration: 1 });

tl.to(".green", { xPercent: 100, opacity: 0, duration: 1 }, "<");

tl.to(".blue", { xPercent: 0, opacity: 0, duration: 1 }, "<");

tl.to(".yellow", { xPercent: -100, opacity: 0, duration: 1 }, "<");
