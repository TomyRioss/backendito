import Image from 'next/image';

export function Icon(): React.ReactNode {
  return (
    <Image
      src={'/backencito.png'}
      width={250}
      height={250}
      alt="fondo"
      objectFit={'cover'}
      className="w-15 h-15 "
    />
  );
}
