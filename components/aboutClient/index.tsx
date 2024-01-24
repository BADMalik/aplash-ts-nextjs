"use client";
import React from "react";

import aboutImg from "@/assets/images/about1.jpg";
import FlagComponent from "@/components/flagWrapper";

export default function index({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: any;
}) {
  console.log({ lang });
  console.log({ dictionary: dictionary["about"] });
  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            {dictionary["about"].aboutTitle} <br />
            {dictionary["about"].aboutTitle1}
            <br />
          </h1>

          <img className="page-featured-image" src={aboutImg.src} alt="" />

          <div className="one_half">
            <ul className="timeline-holder">
              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  {dictionary["about"].aboutTechs}
                </div>
                <div className="timeline-event-date">
                  {dictionary["about"].aboutTechsTitle}
                </div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  {dictionary["about"].aboutIndustry}
                </div>
                <div className="timeline-event-date">
                  {dictionary["about"].aboutIndustryTitle}
                </div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  {dictionary["about"].aboutCross}
                </div>
                <div className="timeline-event-date">
                  {dictionary["about"].aboutCrossTitle}
                </div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  {dictionary["about"].aboutUtilization}
                </div>
                <div className="timeline-event-date">
                  {dictionary["about"].aboutUtilizationTitle}
                </div>
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">
                  {dictionary["about"].aboutCustomize}
                </div>
                <div className="timeline-event-date">
                  {dictionary["about"].aboutCustomizeTitle}
                </div>
              </li>
            </ul>
          </div>

          <div className="one_half last">
            {dictionary["about"].aboutDetailsTitle1}
            <br />
            <br />
            {dictionary["about"].aboutDetails1}
            <br />
            {dictionary["about"].aboutDetails2}
            <br />
            <br />
            {dictionary["about"].aboutDetailsTitle2}
            <br />
            <br />
            {dictionary["about"].aboutDetails3}
            <br />
            {dictionary["about"].aboutDetails4}
            <br />
            <br />
            {dictionary["about"].aboutDetailsTitle3}
            <br />
            <br />
            {dictionary["about"].aboutDetails4}
            <br />
            {dictionary["about"].aboutDetails6}
          </div>
          <div className="clear"></div>
          <div className="flag-wrapper center-text top-60">
            <FlagComponent pageName="about" />
          </div>
        </div>
      </div>
    </main>
  );
}
