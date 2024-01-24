import React from "react";
import logo from "@/assets/images/aplash-big.jpg";
import japanese from "@/assets/images/flags/japanese.jpg";
import english from "@/assets/images/flags/english.jpg";
import chinese from "@/assets/images/flags/chinese.jpg";
import korean from "@/assets/images/flags/korean.jpg";
import { useLocale } from "next-intl";
import Link from "next/link";
const FlagComponent = ({ pageName }: { pageName: string | null }) => {
  return (
    <>
      <ul>
        <li>
          <Link href={pageName ? `/jp/${pageName}` : "/jp"} locale={"jp"}>
            <img src={japanese.src} alt="" />
          </Link>
        </li>
        <li>
          <Link href={pageName ? `/en/${pageName}` : "/en"} locale={"en"}>
            <img src={english.src} alt="" />
          </Link>
        </li>
        <li>
          <Link href={pageName ? `/ch/${pageName}` : "/ch"} locale="ch">
            <img src={chinese.src} alt="" />
          </Link>
        </li>
        <li>
          <Link href={pageName ? `/ko/${pageName}` : "/ko"} locale={"ko"}>
            <img src={korean.src} alt="" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FlagComponent;
