import React from "react";
import TextScramble from "@twistezo/react-text-scramble";
import { Inter, Bebas_Neue } from "@next/font/google";
import "./scramble.css";
import styles from "../../styles/font.css";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../app/fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const ScrambleComponent = () => {
  const texts = [
    "APLASH OFFICIAL",
    "UNLIMITED CHOICES",
    "SIMPLE IDEA BEST SOLUTIONS",
    "CHOOSE US",
  ];
  return (
    <div className={`${myFont.className} scramble-text`}>
      <TextScramble texts={texts} />
    </div>
  );
};
export default ScrambleComponent;
