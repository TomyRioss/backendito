import { ReactElement } from "react";
import LanguageDropdownSwitcher from "./LanguageDropdownSwitcher";
import { Languages } from "@/i18n/config";
import { getUserLocale } from "@/shared/utils/getUserLocale";

const LanguageDropdown = (): ReactElement => {
  const defaultLang = Languages.find(
    async (lang) => lang.value === (await getUserLocale())
  );

  return (
    <>
      <LanguageDropdownSwitcher defaultLang={defaultLang} />
    </>
  );
};

export default LanguageDropdown;
