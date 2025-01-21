import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";

type BDDropdownType = {
  options?: Language[] | object[];
  current?: Language | object;
  setCurrent: Dispatch<SetStateAction<object | Language | undefined>>;
};

const BDDropdown = (props: BDDropdownType): ReactElement => {
  const { options, current: current, setCurrent } = props;

  return (
    <>
      <div className="relative mt-2">
        <Menu>
          <MenuButton
            type="button"
            className="inline-flex items-center gap-2 cursor-pointer rounded-md bg-dark-background-default data-[open]:bg-dark-background-paper hover:bg-dark-background-paper  py-1.5 pl-2 text-left text-dark-primary-light outline outline-1 -outline-offset-1 outline-dark-background-paper  focus:outline-dark-background-paper"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <div className="col-start-1 row-start-1 flex items-center pr-1">
              {current ? (
                <>
                  {"image" in current && (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="size-5 shrink-0 rounded-full mr-1"
                    />
                  )}
                </>
              ) : (
                <>There is no default, current option or info to show</>
              )}
              <IoIosArrowDown />
            </div>
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="absolute z-10 right-0 pr-0 mt-1 max-h-56 w-32 overflow-auto rounded-md bg-dark-background-default py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            {options ? (
              options.map((option) => (
                <MenuItem key={`${option?.id || option}`}>
                  <button
                    className="relative w-full cursor-pointer select-none hover:bg-dark-background-paper py-2 px-3 text-dark-primary-light"
                    onClick={() => setCurrent(option)}
                  >
                    <div className="flex items-center">
                      {"image" in option && (
                        <img
                          src={option.image}
                          alt={option.name}
                          className="size-5 shrink-0 rounded-full"
                        />
                      )}
                      <span className="ml-3 block truncate font-normal">
                        {option.name || option}
                      </span>
                    </div>
                  </button>
                </MenuItem>
              ))
            ) : (
              <>There is no options</>
            )}
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};

export default BDDropdown;
