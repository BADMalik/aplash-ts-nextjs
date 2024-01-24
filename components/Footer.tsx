"use client";
import logo from "@/assets/images/aplash-big.jpg";
import { usePathname } from "next/navigation";
// ----------

const Footer = ({ dictionary }: { dictionary: any }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname?.length > 3 && (
        <footer className="footer">
          <div className="footer-content center-relative">
            <div className="footer-logo">
              <img src={logo.src} alt="Pekko" />
            </div>

            <div className="copyright-holder">© 2020 - Aplash</div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
