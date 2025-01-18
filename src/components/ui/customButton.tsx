import { ReactElement } from "react";

const DemoThemeButton = (): ReactElement => {
  return (
    <>
      <button
        className="bg-light-neutral-100 dark:bg-dark-neutral-900 dark:text-dark-primary-light text-light-text-primary"
      >
        Demo
      </button>
    </>
  );
};

export default DemoThemeButton;
