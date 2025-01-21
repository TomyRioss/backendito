import { getUserLocale } from "@/shared/utils/getUserLocale";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../shared/translations/${locale}.json`)).default,
  };
});
