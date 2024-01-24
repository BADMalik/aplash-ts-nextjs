import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import AboutClient from "../../../components/aboutClient/index";
export const dynamic = "force-dynamic";

const About = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => {
  const dictionary = await getDictionary(locale);
  return <AboutClient dictionary={dictionary} lang={locale} />;
};

export default About;
