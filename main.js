const createAnimation = (socialNetwork) => {
  const socialId = document.getElementById(`${socialNetwork}-container`);
  const coloredBorder = socialId.querySelector(".colored-border");
  const iconImg = socialId.querySelector(".icon");
  const iconContainer = socialId.querySelector(".icon-container");
  const text = socialId.querySelector(".text");
  const textContainer = socialId.querySelector(".text-container");
  const whiteBorder = socialId.querySelector(".white-border");

  const tl = gsap.timeline({ repeat: 1, yoyo: true });

  tl.from(socialId, { duration: 0.25 })
    .from(whiteBorder, {
      duration: 0.5,
      ease: "circ",
      opacity: 0,
      width: 150,
      x: -260,
    })
    .from(
      textContainer,
      {
        duration: 0.5,
        ease: "none",
        width: 0,
      },
      "-=0.25"
    )
    .from(
      coloredBorder,
      {
        duration: 0.5,
        ease: "circ",
        width: 50,
        x: -160,
      },
      "-=0.25"
    )
    .from(iconContainer, { duration: 0.5, ease: "slow", width: 0 }, "-=0.25")
    .from(text, { duration: 0.5, ease: "back", opacity: 0, x: -100 })
    .from(iconImg, { duration: 0.5, ease: "circ", opacity: 0 });

  return tl;
};

const mainTimeline = gsap.timeline({ paused: true, repeat: -1 });

mainTimeline
  .add(createAnimation("twitter"))
  .add(createAnimation("discord"))
  .add(createAnimation("instagram"))
  .add(createAnimation("youtube"));

mainTimeline.play();
