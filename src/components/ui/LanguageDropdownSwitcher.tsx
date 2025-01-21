import { Languages, Locale } from '@/i18n/config';
import { setUserLocale } from '@/shared/utils/getUserLocale';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { ReactElement, startTransition, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type LanguageDropdownSwitcherType = {
  defaultLang: Language;
};

const LanguageDropdownSwitcher = (
  props: LanguageDropdownSwitcherType,
): ReactElement => {
  const { defaultLang: defaultLang } = props;
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLang);
  const t = useTranslations('languageSelector');

  const toggleLanguageHandler = (language: Language): void => {
    const locale = language.value as Locale;
    startTransition(() => {
      setCurrentLanguage(language);
      setUserLocale(locale);
    });
  };

  return (
    <>
      <div className="relative">
        <Menu>
          <MenuButton
            type="button"
            className="inline-flex items-center gap-2 cursor-pointer  bg-dark-background-default data-[open]:bg-dark-background-paper hover:bg-dark-background-paper  py-1.5 pl-2 text-left text-dark-primary-light "
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <div className="col-start-1 row-start-1 flex items-center pr-1">
              {currentLanguage ? (
                <>
                  {'image' in currentLanguage && (
                    <img
                      src={currentLanguage.image}
                      alt={currentLanguage.name}
                      className="size-5 shrink-0 rounded-full mr-1"
                    />
                  )}
                </>
              ) : (
                <>{t('noDefaultOrCurrentLanguage')}</>
              )}
              <IoIosArrowDown />
            </div>
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="absolute bg-slate-100 mt-4 z-10 right-0 pr-0 max-h-56 w-32 overflow-auto rounded-md bg-dark-background-default py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            {Languages ? (
              Languages.map(option => (
                <MenuItem key={`${option?.id || option}`}>
                  <button
                    className="relative w-full cursor-pointer select-none hover:bg-dark-background-paper py-2 px-3 text-dark-primary-light"
                    onClick={() => {
                      toggleLanguageHandler(option);
                    }}
                  >
                    <div className="flex items-center">
                      {'image' in option && (
                        <img
                          src={option.image}
                          alt={option.name}
                          className="size-5 shrink-0 rounded-full"
                        />
                      )}
                      <span className="ml-3 block truncate font-normal">
                        {option.name}
                      </span>
                    </div>
                  </button>
                </MenuItem>
              ))
            ) : (
              <>{t('noOptionsToShow')}</>
            )}
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};

export default LanguageDropdownSwitcher;
