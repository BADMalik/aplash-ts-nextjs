import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import "reactjs-popup/dist/index.css";
import HomePage from "../../components/homeWrapper";
export const dynamic = "force-dynamic";
const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <main
        className="page-background"
        style={{
          position: "relative",
        }}
      >
        <HomePage dictionary={dictionary} />
      </main>
    </>
  );
};

export default Home;
