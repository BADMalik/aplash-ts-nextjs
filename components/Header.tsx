"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale } from "next-intl";
// Images
import logo from "@/assets/images/aplash-big.jpg";
import japanese from "@/assets/images/flags/japanese.jpg";
import english from "@/assets/images/flags/english.jpg";
import chinese from "@/assets/images/flags/chinese.jpg";
import korean from "@/assets/images/flags/korean.jpg";
import FlagComponent from "./flagWrapper";
// import { useRouter } from "next/router";
// --------------

const Header = ({ dictionary }: { dictionary: any }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const locale = useLocale();

  const pathname: string = usePathname();

  const toggleNav = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <div className={"menu-holder-front " + (menuOpen && "open")}>
        <div className="header-logo">
          <Link locale={false} href={`/`}>
            <img src={logo.src} alt="Pekko" />
          </Link>
        </div>

        <div className="toggle-holder">
          <div
            id="toggle"
            className={"all-loaded " + (menuOpen && "on")}
            onClick={toggleNav}
          >
            <div className="menu-line"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-holder-back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-holder-back"
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(50px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(50px)` }}
              className="menu-wrapper-back"
            >
              <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                  <li>
                    <span className="menu-num">01</span>
                    <Link
                      locale={false}
                      href={`/${locale}`}
                      className={pathname === `/` ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">02</span>
                    <Link
                      href={`/${locale}/about`}
                      locale={false}
                      className={pathname === `/about/` ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">03</span>
                    <Link
                      href={`/${locale}/services`}
                      locale={false}
                      className={pathname === `/services/` ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <span className="menu-num">04</span>
                    <Link
                      href={`/${locale}/contact`}
                      locale={false}
                      className={pathname === `/contact/` ? "current" : ""}
                      onClick={handleCloseMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="menu-right-text">
                <div>
                  <p className="menu-text-title">E-mail</p>
                  <div className="menu-text">hello@yourwebsite.com</div>
                </div>
                <div>
                  <p className="menu-text-title">Phone</p>
                  <div className="menu-text">+988 345 783 174</div>
                </div>
                <div>
                  <p className="menu-text-title">Location</p>
                  <div className="menu-text">
                    2819 Young Road, Massachusetts, United States
                  </div>
                </div>
                <div>
                  <p className="menu-text-title">Language</p>
                  <div className="flag-wrapper">
                    <FlagComponent pageName={null} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

<div className="menu-holder-back">
  <div className="menu-wrapper-back">
    <nav id="header-main-menu">
      <ul className="main-menu sm sm-clean">
        <li>
          <span className="menu-num">01</span>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span className="menu-num">02</span>
          <a href="about.html">About</a>
        </li>
        <li>
          <span className="menu-num">03</span>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <span className="menu-num">04</span>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>

    <div className="menu-right-text">
      <div>
        <p className="menu-text-title">E-mail</p>
        <div className="menu-text">hello@yourwebsite.com</div>
      </div>
      <div>
        <p className="menu-text-title">Phone</p>
        <div className="menu-text">+988 345 783 174</div>
      </div>
      <div>
        <p className="menu-text-title">Location</p>
        <div className="menu-text">
          2819 Young Road, Massachusetts, United States
        </div>
      </div>
      <div>
        <p className="menu-text-title">Language</p>
        <div className="flag-wrapper">
          <ul>
            <li>
              <a>
                <img src={japanese.src} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={english.src} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={chinese.src} alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src={korean.src} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>;
