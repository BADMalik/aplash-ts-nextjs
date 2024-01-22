import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import Contact from "../../../components/ContactClient/index";

// Images
export const dynamic = "force-dynamic";

const Index = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);

  return <Contact dictionary={dictionary} />;
};

export default Index;
