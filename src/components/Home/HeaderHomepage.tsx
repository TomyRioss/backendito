import React from 'react';

const HeaderHomepage = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center h-screen text-white font-serif ">
        <h1 className="text-8xl font-bold">Backendito.</h1>
        <h2 className="text-4xl mt-5">
          Tú idea, <b className="text-cyan-300">nuestro trabajo.</b>
        </h2>
      </header>
    </>
  );
};

export default HeaderHomepage;
