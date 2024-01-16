import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import "reactjs-popup/dist/index.css";
import Footer from "../Footer";
import Header from "../Header";
const HeaderWrapper = async ({
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
        <Header dictionary={dictionary} />
      </main>
    </>
  );
};

export default HeaderWrapper;
