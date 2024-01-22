import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import "reactjs-popup/dist/index.css";
import Footer from "../Footer";
const FooterWrapper = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <main
        className="page-background"
        style={{
          position: "relative",
        }}
      >
        <Footer dictionary={dictionary} />
      </main>
    </>
  );
};

export default FooterWrapper as any;
