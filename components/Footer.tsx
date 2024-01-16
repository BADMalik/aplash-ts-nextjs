"use client";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
// ----------

const Footer = ({ dictionary }: { dictionary: any }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <footer className="footer">
          <div className="footer-content center-relative">
            <div className="footer-logo">
              <img src={logo.src} alt="Pekko" />
            </div>

            <div className="copyright-holder">
              © {new Date(Date.now()).getFullYear()} - Pekko Nextjs Template by{" "}
              <a href="https://cocobasic.com">Coco+Basic</a>.
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
