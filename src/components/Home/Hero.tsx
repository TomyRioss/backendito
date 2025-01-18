import Image from 'next/image';

export function Hero(): React.ReactNode {
  return (
    <header className={`flex flex-col items-center justify-center h-screen `}>
      <Image
        src={"/background.png"}
        width={500}
        height={500}
        alt='fondo'
        objectFit={"cover"}
        className="-z-10 h-full w-full"
      />
    </header>
  );
};


