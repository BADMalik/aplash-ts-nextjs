export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ch", "ko", "jp"],
} as const;

export const nextI18NextConfig = {
  i18n,
  outputFileTracing:true
} as const;

export type Locale = (typeof i18n)["locales"][number];