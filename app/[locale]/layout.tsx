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
import React from "react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const dynamic = "force-dynamic";

// --------------
// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Aplash - Your imagination becomes own web",
  description: "상상이 실현이 되는 웹 제작회사, 맞춤형 웹 제작.",
  icons: { icon: "/icon.png" },
  keywords: [
    "웹제작",
    "웹사이트",
    "웹사이트제작",
    "커스텀웹제작",
    "맞춤형 웹제작",
    "ウェブ制作",
    "创建网站",
    "カスタムウェブ",
    "Custom web",
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
          <ClientLayoutWrapper>
            <HeaderWrapper params={params} />
            {children}
            <FooterWrapper params={params} />
          </ClientLayoutWrapper>
        </div>
      </body>
    </html>
  );
}
