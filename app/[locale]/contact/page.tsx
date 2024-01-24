import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import Contact from "../../../components/ContactClient/index";

// Images
export const dynamic = "force-dynamic";

const Index = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => {
  const dictionary = await getDictionary(locale);
  return <Contact dictionary={dictionary} />;
};

export default Index;
