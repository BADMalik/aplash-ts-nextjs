import "server-only";
import type { Locale } from "./i18n-config";
import { i18n } from "./i18n-config";
// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./app/dictionaries/en.json").then((module) => module.default),
  jp: () => import("./app/dictionaries/jp.json").then((module) => module.default),
  ch: () => import("./app/dictionaries/ch.json").then((module) => module.default),
  ko: () => import("./app/dictionaries/ko.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) =>
//   dictionaries[locale]?.() ?? dictionaries.en();
export const getDictionary = async (locale: Locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
