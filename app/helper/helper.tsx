export const getRandom = (which: "x" | "y"): number => {
  console.clear();
  console.log(
    "Your screen resolution is: " +
      window.screen.width * window.devicePixelRatio +
      " x " +
      window.screen.height * window.devicePixelRatio
  );
  const screenHeight = window.screen.height * window.devicePixelRatio;
  const screenWidth = window.screen.width * window.devicePixelRatio;

  let random = 0;
  if (which === "y") {
    random =
      screenHeight < screenWidth
        ? parseInt(screenHeight.toString()) * 0.8
        : 500;
  } else {
    random =
      screenHeight < screenWidth ? parseInt(screenWidth.toString()) * 0.5 : 300;
  }

  const maxRandom = Math.floor(Math.random() * random);
  return maxRandom;
};
