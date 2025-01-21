import { ReactElement } from "react";
import LanguageDropdownSwitcher from "./LanguageDropdownSwitcher";
import { Languages } from "@/i18n/config";
import { useLocale } from "next-intl";

const LanguageDropdown = (): ReactElement => {
  const userLocale = useLocale();
  const defaultLang =
    Languages.find((lang) => lang.value === userLocale) || Languages[1];

  return (
    <>
      <LanguageDropdownSwitcher defaultLang={defaultLang} />
    </>
  );
};

export default LanguageDropdown;
