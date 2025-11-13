import en from "@/i18n/lang/en.json";
import cn from "@/i18n/lang/cn.json";
import seoEN from "@/i18n/seo/en.json";
import seoCN from "@/i18n/seo/cn.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",

  messages: {
    en: {
      ...en,
      ...seoEN,
    },
    cn: {
      ...cn,
      ...seoCN,
    },
  },
}));

