import HeaderWrapper from "@/components/headerWrapper";
import FooterWrapper from "@/components/footerWrapper";
import ClientLayoutWrapper from "../../components/clientLayoutWrapper";
// FONTS
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/comman.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const dynamic = "auto";

// --------------
// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Pekko - Minimal Black Nextjs Template",
  description: "Template by CocoBasic",
  keywords: ["HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
  authors: [
    {
      name: "Cocobasic",
      url: "https://www.cocobasic.com/",
    },
  ],
};

export default function RootLayout({
  children,
  params,
}: {
  children: any;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className="page-background">
        <div className="site-wrapper">
          {/* <ClientLayoutWrapper>
            <HeaderWrapper params={params} />
          </ClientLayoutWrapper> */}
          adaw
          {/* <ClientLayoutWrapper>
            <FooterWrapper params={params} />
          </ClientLayoutWrapper> */}
        </div>
      </body>
    </html>
  );
}
