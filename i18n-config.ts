
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ch", "ko", "jp"],
} as const;

export const nextI18NextConfig = {
  i18n,
  // Path to the translation files
  // i.e., ./public/locales/en.json, ./public/locales/ch.json, etc.
  localePath: `${process.env.LAMBDA_TASK_ROOT}/public/dictionaries`,
} as const;

export type Locale = (typeof i18n)["locales"][number];